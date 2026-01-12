let points = [
    [10,10],[30,10],[50,10],
    [10,30],[30,30],[50,30],
    [10,50],[30,50],[50,50],
    [10,60],[30,60],[50,60],
    [10,80],[30,80],[50,80]
];
let glyphs = {
    1: [[1,13],[1,2]],
    10: [[1,13],[0,1]],
    100: [[1,13],[14,13]],
    1000: [[1,13],[12,13]],
    2: [[1,13],[4,5]],
    20: [[1,13],[3,4]],
    200: [[1,13],[10,11]],
    2000: [[1,13],[9,10]],
    3: [[1,13],[1,5]],

 
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
canvas.width = 120;
canvas.height = 180;
cx.strokeStyle = '#000';
cx.lineWidth = 4;
cx.lineCap = "square";

document.querySelector('output').appendChild(canvas);

const drawpoints = (points) => {
    points.forEach(point => {
        drawline(point[0], point[1] - 5, point[0], point[1] + 5);
        drawline(point[0] - 5, point[1], point[0] + 5, point[1]);
    });
}
// drawpoints(points);
let numbers = [2000];
numbers.forEach(number => {
    if (glyphs[number]) {
        glyphs[number].forEach(glyph => {
            drawline(
                points[glyph[0]][0]*2, points[glyph[0]][1]*2,
                points[glyph[1]][0]*2, points[glyph[1]][1]*2 
            )
        });
    }
});
