let meshes = [];
let object;

let state = 0;

let raycaster = new THREE.Raycaster();

var scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(35,35,35)");
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
let renderDiv = document.getElementById("renderDiv");
renderDiv.appendChild( renderer.domElement );


var geometry = new THREE.TorusKnotGeometry( 3, 1, 100, 16 );
var material = new THREE.MeshBasicMaterial( { color: new THREE.Color("rgb(50,120,50)"), side: THREE.DoubleSide } );
var torusKnot = new THREE.Mesh( geometry, material );
torusKnot.material.wireframe = true;
meshes.push(torusKnot);
object = torusKnot;
scene.add( object );

var geometry = new THREE.BoxGeometry( 3, 3, 3 );
var material = new THREE.MeshBasicMaterial( { color: new THREE.Color("rgb(50,120,50)"), side: THREE.DoubleSide } );
var cube = new THREE.Mesh( geometry, material );
cube.material.wireframe = true;
meshes.push(cube);


var geometry = new THREE.SphereGeometry( 3, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: new THREE.Color("rgb(50,120,50)"), side: THREE.DoubleSide} );
var sphere = new THREE.Mesh( geometry, material );
sphere.material.wireframe = true;
meshes.push(sphere);

var geometry = new THREE.TorusGeometry( 3, 1, 16, 100 );
var material = new THREE.MeshBasicMaterial( {color: new THREE.Color("rgb(50,120,50)"), side: THREE.DoubleSide} );
var torus = new THREE.Mesh( geometry, material );
torus.material.wireframe = true;
meshes.push( torus );


camera.position.z = 5;
window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener( 'mousedown', onDocumentMouseDown, false );
document.addEventListener('touchend', onDocumentTouchEnd, false);

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
var animate = function () {
    requestAnimationFrame( animate );

    object.rotation.x += 0.01;
    object.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();

function onDocumentMouseDown( e ) {
    e.preventDefault();
    var mouse = new THREE.Vector3();

    mouse.x = (e.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(e.clientY / renderer.domElement.clientHeight) * 2 + 1;
    
    
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObject( object );
    
    if(intersects.length > 0){
        
        if(state == meshes.length - 1){
            state = 0;
        }else{
            state++;
        }
        
        scene.remove(object);
        object = meshes[state];
        scene.add(object);
    }
    
}

function onDocumentTouchEnd( e ) {
    e.preventDefault();
    var mouse = new THREE.Vector3();

    mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObject( object );
    if(e.target.name == "projects" || e.target.name == "about"){
        e.target.click();
    }else if(intersects.length > 0){
        
        if(state == meshes.length - 1){
            state = 0;
        }else{
            state++;
        }
        
        scene.remove(object);
        object = meshes[state];
        scene.add(object);
    }
    
  }