import { FreeCamera } from "@babylonjs/core";
import { Engine } from "@babylonjs/core";
import { HemisphericLight } from "@babylonjs/core";
import { Vector3 } from "@babylonjs/core";
import { CreateGround } from "@babylonjs/core";
import { CreateSphere } from "@babylonjs/core";
import { Scene } from "@babylonjs/core";
import { StandardMaterial } from "@babylonjs/core";
//get canvas
const canvas = document.getElementById("renderCanvas");
//Associate a babylon engine to it
const engine = new Engine(canvas);
//Create first scene
let scene = new Scene(engine);

//camera
//create and position a free camera (non-mesh)
let camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
//"target the camera to scene origin"? like center positioning in the scene?
camera.setTarget(Vector3.Zero());
//attach camera to the canvas
camera.attachControl(canvas, true);
//create a light, aiming 0,1,0 - to the sky (non-mesh)
let light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
light.intensity = 0.7;
//create a material
let material = new StandardMaterial("material1", scene);

//shapes
//built in sphere shape
let sphere = CreateSphere("sphere1", { segments: 16, diameter: 2 }, scene);
sphere.position.y = 2;
sphere.material = material;
//built in ground shape.
let ground = CreateGround(
	"ground1",
	{ width: 6, height: 6, subdivisions: 1 },
	scene
);
ground.material = material;

//render frames
engine.runRenderLoop(() => {
	scene.render();
});
