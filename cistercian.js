let points = [
    [10,10],[30,10],[50,10],
    [10,30],[30,30],[50,30],
    [10,50],[30,50],[50,50],
    [10,70],[30,70],[50,70],
    [10,90],[30,90],[50,90]
];
let glyphs = {
 1: [[1,13],[1,2]],
 3: [[1,13],[1,5]] 
};
const drawline = (x,y,x1,y1) => {
    cx.beginPath();
    cx.moveTo(x, y);
    cx.lineTo(x1, y1);
    cx.stroke();
    cx.closePath();  
};
let canvas = document.createElement('canvas');
let cx = canvas.getContext('2d');
canvas.width = 60;
canvas.height = 100;
document.querySelector('output').appendChild(canvas);

const drawpoints = (points) => {
    points.forEach(point => {
        drawline(point[0], point[1] - 5, point[0], point[1] + 5);
        drawline(point[0] - 5, point[1], point[0] + 5, point[1]);
    });
}
// drawpoints(points);
let numbers = [1,3];
numbers.forEach(number => {
    if (glyphs[number]) {
        glyphs[number].forEach(glyph => {
            drawline(
                points[glyph[0]][0], points[glyph[0]][1],
                points[glyph[1]][0], points[glyph[1]][1] 
            )
        });
    }
});
