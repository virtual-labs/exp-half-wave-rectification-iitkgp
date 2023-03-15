var canvas, ctx;
var flag;
var axes = {};
var vmaxs = 2; //in volt
var tmaxs = 0.001; //in sec

//var  button = document.getElementById("start").value;
//function myFunction(e) {
//    var x = e.clientX;
//    var y = e.clientY;
//    var coor = "Coordinates: (" + x + "," + y + ")";
//    document.getElementById("demo").innerHTML = coor;
//}

//function clearCoor() {
//    document.getElementById("demo").innerHTML = "";
//     document.getElementById("peakslider").value=0;
//    document.getElementById("phase").value=0;
//    document.getElementById("posy").value=0;
//   document.getElementById("freq").value=1000;
//   document.getElementById("peaks").value=0;
//     document.getElementById("posy2").value=0;
//    document.getElementById("phs2").value=0;
//    var fo = 1000;
//    
//}
//function startng() {
//
//    ctx.clearRect(0, 0, canvas.width, canvas.height);
//    document.getElementById("peakslider").disabled = true;
//    document.getElementById("posy").disabled = true;
//    document.getElementById("phs").disabled = true;
//    document.getElementById("frqs").disabled = true;
//    
//    document.getElementById("peaks").disabled = true;
//    document.getElementById("posy2").disabled = true;
//}
function mainswt() {
    var bttn = document.getElementById('onff').value;
    if (bttn == "Off") {

        document.getElementById("onff").value = "On";

        ctx.clearRect(0, 0, canvas.width, canvas.height);


        document.getElementById("peakslider").disabled = true;
        document.getElementById("posy").disabled = true;
        document.getElementById("phs").disabled = true;
        document.getElementById("frqs").disabled = true;

        document.getElementById("peaks").disabled = true;
        document.getElementById("posy2").disabled = true;
        document.getElementById("phs2").disabled = true;
        document.getElementById("freqs").disabled = true;

        document.getElementById("chhn1").disabled = true;
        document.getElementById("chhn2").disabled = true;
        document.getElementById("dual").disabled = true;
        document.getElementById("grnd").disabled = true;

        document.getElementById("sncr").disabled = true;
        document.getElementById("run").disabled = true;

        document.getElementById("peakslider").value = 0;
        document.getElementById("phs").value = 0;
        document.getElementById("posy").value = 0;
        document.getElementById("frqs").value = 1000;

        document.getElementById("peaks").value = 0;
        document.getElementById("posy2").value = 0;
        document.getElementById("phs2").value = 0;
        document.getElementById("frq").value = 1000;

        document.getElementById("vp").value = 0;
        document.getElementById("phase").value = 0;
        document.getElementById("pstny").value = 0;
        document.getElementById("freq").value = 1000;

        document.getElementById("vpe").value = 0;
        document.getElementById("pstny2").value = 0;
        document.getElementById("phases").value = 0;
        document.getElementById("freqs").value = 1000;
        //var fo = 1000;

    }
    else {
        document.getElementById("onff").value = "Off";

        document.getElementById("sncr").disabled = false;
        document.getElementById("run").disabled = false;

        drawAxis();
        drawGrid(ctx);


    }
}

//------------------------------------------For Channel 1-----------------------------------------------------------------------//
function draw() {
    canvas = document.getElementById("mycanvas");

    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");

    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    sinecrv();
//    document.getElementById("tym").style.display = "block";
//    document.getElementById("volt").style.display = "block";
    document.getElementById("peakslider").disabled = false;
    document.getElementById("posy").disabled = false;
    document.getElementById("phs").disabled = false;
    document.getElementById("frqs").disabled = false;

    document.getElementById("peaks").disabled = true;
    document.getElementById("posy2").disabled = true;
    document.getElementById("phs2").disabled = true;
    document.getElementById("freqs").disabled = true;

    document.getElementById("chhn1").disabled = false;
    document.getElementById("chhn2").disabled = false;
    document.getElementById("dual").disabled = false;
    document.getElementById("grnd").disabled = false;
}

//----------------------------------------Channel 1------------------------------------------------------------//
function sliderChange() {
    var slidr = document.getElementById("peakslider").value;
    document.getElementById("vp").value = slidr;
    if (flag == 1) {
        draw();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }

}
function psychnge() {
    var posya = document.getElementById("posy").value;
    document.getElementById("pstny").value = posya;
    if (flag == 1) {
        draw();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }

}
function phasesld() {
    var phsl = document.getElementById("phs").value;
    document.getElementById("phase").value = phsl;
    if (flag == 1) {
        draw();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }

}

function freqnc() {
    var frq = document.getElementById("frqs").value;
    document.getElementById("freq").value = frq;

    if (flag == 1) {
        draw();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }
}
function sinecrv() {

    var vp = document.getElementById("peakslider").value;
    var phase = document.getElementById("phase").value;
    var pos = document.getElementById("posy").value;
    var fo = document.getElementById("freq").value;

//---------------------------------------------------------Input Sinewave-------------------------------------------------------------------------------//
    flag = 1;
    ctx.beginPath();

    ctx.lineWidth = 1.5;
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    //ctx.fillText("Input wave:", 40, 20);
    ctx.strokeStyle = "black";

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    tstart = -tmaxs; //in sec
    // alert(tstart);
    tstop = tmaxs;
    // alert(tstop );
    dt = (tstop - tstart) / (101 - 1);
    //  alert(dt);// time increment over N points


    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp * Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180);
    }
    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;
    // alert(x0);
    y0 = axes.y0;
    // alert(y0);
    xscale = axes.xscale;
    yscale = axes.yscale;

    ctx.beginPath();
//260.5,80
    var p = y0 - parseInt(pos) * yscale;
    for (i = 0; i < axes.N; i++) {
        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - y[i] * yscale + p - 175;

        // draw ine to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();

}

function chnlo() {
    draw();
}

//-----------------------------------------For Channel 2-----------------------------------------------------------------------------------//
function drwn() {
    canvas = document.getElementById("mycanvas");

    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    document.getElementById("chhn1").disabled = false;
    document.getElementById("chhn2").disabled = false;
    document.getElementById("dual").disabled = false;
    document.getElementById("grnd").disabled = false;

    document.getElementById("peakslider").disabled = true;
    document.getElementById("posy").disabled = true;
    document.getElementById("phs").disabled = true;
    document.getElementById("frqs").disabled = true;

    document.getElementById("peaks").disabled = false;
    document.getElementById("posy2").disabled = false;
    document.getElementById("phs2").disabled = false;
    document.getElementById("freqs").disabled = false;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    //sinecrv();
    sinhw();
//chnlt();
}

//-------------------------------------------Channel 2-------------------------------------------------------------//
function sliderChng() {
    var slde = document.getElementById("peaks").value;
    document.getElementById("vpe").value = slde;

    if (flag == 2) {
        drwn();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }
}
function posychnge() {
    var postn = document.getElementById("posy2").value;
    document.getElementById("pstny2").value = postn;

    if (flag == 2) {
        drwn();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }
}

function phaseslds() {
    var phs = document.getElementById("phs2").value;
    document.getElementById("phases").value = phs;

    if (flag == 2) {
        drwn();
    }
    if (flag == 3) {
        drawn();
    }
    if (flag == 4) {
        drawg();
    }
}

function frequencychng() {
    var frqncy = document.getElementById("freqs").value;
    document.getElementById("frq").value = frqncy;

    if (flag == 2) { //for output halfwave
        drwn();
    }
    if (flag == 3) { //for both 
        drawn();
    }
    if (flag == 4) { //for ground
        drawg();
    }

}
function sinhw() {


    var vps = document.getElementById("peaks").value;
    var pst = document.getElementById("posy2").value;
    var phss = document.getElementById("phs2").value;
    var fo = document.getElementById("freqs").value;


    //---------------------------------------------------------Output Halfwave Rectifier--------------------------------------------------------------------//   
    flag = 2;
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    //  ctx.fillText("Output wave:", 40, 160);
    ctx.strokeStyle = "black";
    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    tstart = -tmaxs; //in sec
    // alert(tstart);
    tstop = tmaxs;
    // alert(tstop );
    dt = (tstop - tstart) / (101 - 1);
    //  alert(dt);// time increment over N points

    for (i = 0; i < axes.N; i += 1) {
        x[i] = (tstart + i * dt).toPrecision(6);
        y[i] = (vps * Math.sin(2 * 3.1415 * fo * x[i] + phss * 3.1415 / 180)).toPrecision(6);//in radian + parseInt(pos)
    }
    var i, x0, y0, xscale, yscale;
    var xp, yp;
    var pos = document.getElementById("posy2").value;

    x0 = axes.x0;
    // alert(x0);260.5
    y0 = axes.y0;

    // alert(y0);175.5
    xscale = axes.xscale;//250000
    yscale = axes.yscale;//75
    //alert(xscale+"  "+yscale);
    ctx.beginPath();

    var p = y0 - parseInt(pos) * yscale;
    for (i = 0; i < axes.N; i++) {
        if (y[i] >= 0) {
            xp = x0 + x[i] * xscale;
            yp = y0 - (y[i]) * yscale + p - 175;

            // draw line to next point
            if (i == 0)
                ctx.moveTo(xp, yp);
            else
                ctx.lineTo(xp, yp);

        }
        
    }

    ctx.lineTo(520, yp);

    /* for (i = 0; i < 26; i += 1) {
     // if (y[i] >= 0) {
     xp = x0 + x[i] * xscale;
     
     yp = y0 - y[i] * yscale + p - 175;
     
     //alert(xp+"  "+yp);
     // draw line to next point
     if (i == 0)
     ctx.moveTo(xp, yp);
     else
     ctx.lineTo(xp, yp);
     // }
     }
     ctx.lineTo(260, yp);
     for (i = 52; i < 76; i += 1) {
     // if (y[i] >= 0) {
     xp = x0 + x[i] * xscale;
     
     yp = y0 - y[i] * yscale + p - 175;
     
     //alert(xp+"  "+yp);
     // draw line to next point
     if (i == 0)
     ctx.moveTo(xp, yp);
     else
     ctx.lineTo(xp, yp);
     // }
     
     }
     
     ctx.lineTo(520, yp);*/


    ctx.stroke();

}

function chnlt() {
    drwn();
}

//----------------------------------------------------- For Both Channel ---------------------------------------------------------------------------------//
function drawn() {
    canvas = document.getElementById("mycanvas");

    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById("peakslider").disabled = false;
    document.getElementById("posy").disabled = false;
    document.getElementById("phs").disabled = false;
    document.getElementById("frqs").disabled = false;

    document.getElementById("peaks").disabled = false;
    document.getElementById("posy2").disabled = false;
    document.getElementById("phs2").disabled = false;
    document.getElementById("freqs").disabled = false;
    drawGrid(ctx);
    drawAxis();
    sinwvb();
}

function sinwvb() {

    var vp = document.getElementById("peakslider").value;
    var phase = document.getElementById("phs").value;
    var pos = document.getElementById("posy").value;
    var fq = document.getElementById("frqs").value;

    flag = 3;
//---------------------------------------------------------Input Sinewave-------------------------------------------------------------------------------//
    ctx.beginPath();

    ctx.lineWidth = 1.5;
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    //ctx.fillText("Input wave:", 40, 20);
    ctx.strokeStyle = "black";

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    tstart = -tmaxs; //in sec
    // alert(tstart);
    tstop = tmaxs;
    // alert(tstop );
    dt = (tstop - tstart) / (101 - 1);
    //  alert(dt);// time increment over N points


    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp * Math.sin(2 * 3.1415 * fq * x[i] + phase * 3.1415 / 180);
    }
    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;
    // alert(x0);
    y0 = axes.y0;
    // alert(y0);
    xscale = axes.xscale;
    yscale = axes.yscale;

    ctx.beginPath();
//260.5,80
    var p = y0 - parseInt(pos) * yscale;
    for (i = 0; i < axes.N; i++) {
        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - y[i] * yscale + p - 175;

        // draw ine to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();

//---------------------------------------------------------Output Halfwave Rectifier--------------------------------------------------------------------//   
    var vps = document.getElementById("peaks").value;
    var pos1 = document.getElementById("posy2").value;
    var phss = document.getElementById("phs2").value;
    var fqs = document.getElementById("freqs").value;

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    //  ctx.fillText("Output wave:", 40, 160);
    ctx.strokeStyle = "black";
    var x1 = new Array(), y1 = new Array();  // x,y plotting variables
    var dt1, tstart1, tstop1;             // time variables

    tstart1 = -tmaxs; //in sec
    // alert(tstart);
    tstop1 = tmaxs;
    // alert(tstop );
    dt1 = (tstop1 - tstart1) / (101 - 1);
    //  alert(dt);// time increment over N points

    for (var j = 0; j < axes.N; j += 1) {
        x1[j] = (tstart1 + j * dt1).toPrecision(6);
        y1[j] = (vps * Math.sin(2 * 3.1415 * fqs * x1[j] + phss * 3.1415 / 180)).toPrecision(6);//in radian + parseInt(pos)
    }
    var j, x0, y0, xscale, yscale;
    var xp1, yp1;


    x0 = axes.x0;
    // alert(x0);260.5
    y0 = axes.y0;

    // alert(y0);175.5
    xscale = axes.xscale;//250000
    yscale = axes.yscale;//75
    //alert(xscale+"  "+yscale);
    ctx.beginPath();

    var p1 = y0 - parseInt(pos1) * yscale;
    for (j = 0; j < axes.N; j++) {
        if (y1[j] > 0) {
            xp1 = x0 + x1[j] * xscale;
            yp1 = y0 - (y1[j]) * yscale + p1 - 175;

            // draw line to next point
            if (j == 0)
                ctx.moveTo(xp1, yp1);
            else
                ctx.lineTo(xp1, yp1);

        }
    }

    ctx.lineTo(520, yp1);

    /* for (j = 0; j < 26; j += 1) {
     // if (y[i] >= 0) {
     xp1 = x0 + x1[j] * xscale;
     
     yp1 = y0 - y1[j] * yscale + p1 - 175;
     
     //alert(xp+"  "+yp);
     // draw line to next point
     if (j == 0)
     ctx.moveTo(xp1, yp1);
     else
     ctx.lineTo(xp1, yp1);
     // }
     }
     ctx.lineTo(260, yp1);
     for (j = 52; j < 76; j += 1) {
     // if (y[i] >= 0) {
     xp1 = x0 + x1[j] * xscale;
     
     yp1 = y0 - y1[j] * yscale + p1 - 175;
     
     //alert(xp+"  "+yp);
     // draw line to next point
     if (j == 0)
     ctx.moveTo(xp1, yp1);
     else
     ctx.lineTo(xp1, yp1);
     // }
     
     }
     
     ctx.lineTo(520, yp1);*/


    ctx.stroke();

}

function bthd() {
    drawn();
}

//------------------------------------------------------- For Ground-----------------------------------------------------------------------------------//
function drawg() {
    canvas = document.getElementById("mycanvas");

    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById("peakslider").disabled = false;
    document.getElementById("posy").disabled = false;
    document.getElementById("phs").disabled = false;
    document.getElementById("frqs").disabled = false;

    document.getElementById("peaks").disabled = false;
    document.getElementById("posy2").disabled = false;
    document.getElementById("phs2").disabled = false;
    document.getElementById("freqs").disabled = false;
    drawGrid(ctx);
    drawAxis();
    singr();
}

function singr() {


    var vp = 0;
    var phase = document.getElementById("phase").value;
    var pos = document.getElementById("posy").value;
    var fo = document.getElementById("freq").value;

    flag = 4;
//---------------------------------------------------------Input Sinewave-------------------------------------------------------------------------------//
    ctx.beginPath();

    ctx.lineWidth = 1.5;
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    //ctx.fillText("Input wave:", 40, 20);
    ctx.strokeStyle = "black";

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    tstart = -tmaxs; //in sec
    // alert(tstart);
    tstop = tmaxs;
    // alert(tstop );
    dt = (tstop - tstart) / (101 - 1);
    //  alert(dt);// time increment over N points


    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp * Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180);
    }
    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;
    // alert(x0);
    y0 = axes.y0;
    // alert(y0);
    xscale = axes.xscale;
    yscale = axes.yscale;

    ctx.beginPath();
//260.5,80
    var p = y0 - parseInt(pos) * yscale;
    for (i = 0; i < axes.N; i++) {
        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - y[i] * yscale + p - 175;

        // draw ine to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();

//---------------------------------------------------------Output Halfwave Rectifier--------------------------------------------------------------------//   
    var vps = 0;
    var pst = document.getElementById("posy2").value;
    var phss = document.getElementById("phs2").value;
    var fos = document.getElementById("freqs").value;

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.font = "20px Georgia";
    ctx.fillStyle = "Black";
    //  ctx.fillText("Output wave:", 40, 160);
    ctx.strokeStyle = "black";
    var x1 = new Array(), y1 = new Array();  // x,y plotting variables
    var dt1, tstart1, tstop1;             // time variables

    tstart1 = -tmaxs; //in sec
    // alert(tstart);
    tstop1 = tmaxs;
    // alert(tstop );
    dt1 = (tstop1 - tstart1) / (101 - 1);
    //  alert(dt);// time increment over N points

    for (j = 0; j < axes.N; j += 1) {
        x1[j] = (tstart1 + j * dt1).toPrecision(6);
        y1[j] = (vps * Math.sin(2 * 3.1415 * fos * x1[j] + phss * 3.1415 / 180)).toPrecision(6);//in radian + parseInt(pos)
    }
    var j, x0, y0, xscale, yscale;
    var xp1, yp1;
    var pos1 = document.getElementById("posy2").value;
    //var fo = document.getElementById("fo").value;

    x0 = axes.x0;
    // alert(x0);260.5
    y0 = axes.y0;

    // alert(y0);175.5
    xscale = axes.xscale;//250000
    yscale = axes.yscale;//75
    //alert(xscale+"  "+yscale);
    ctx.beginPath();

    var p1 = y0 - parseInt(pos1) * yscale;
    for (j = 0; j < axes.N; j++) {
        if (y[j] >= 0) {
            xp = x0 + x[j] * xscale;
            yp = y0 - (y[j]) * yscale + p1 - 175;

            // draw line to next point
            if (j == 0)
                ctx.moveTo(xp, yp);
            else
                ctx.lineTo(xp, yp);

        }
    }

    ctx.lineTo(520, yp);

    /*for (j = 0; j < 26; j += 1) {
     // if (y[i] >= 0) {
     xp1 = x0 + x1[j] * xscale;
     
     yp1 = y0 - y1[j] * yscale + p1 - 175;
     
     //alert(xp+"  "+yp);
     // draw line to next point
     if (j == 0)
     ctx.moveTo(xp1, yp1);
     else
     ctx.lineTo(xp1, yp1);
     // }
     }
     ctx.lineTo(260, yp1);
     for (j = 52; j < 76; j += 1) {
     // if (y[i] >= 0) {
     xp1 = x0 + x1[j] * xscale;
     
     yp1 = y0 - y1[j] * yscale + p1 - 175;
     
     //alert(xp+"  "+yp);
     // draw line to next point
     if (j == 0)
     ctx.moveTo(xp1, yp1);
     else
     ctx.lineTo(xp1, yp1);
     // }
     
     }F
     ctx.lineTo(520, yp1);*/

    ctx.stroke();

}

function grnds() {
    drawg();
}

//---------------------------------------------------------Drawing Axis----------------------------------------------------------------------------------//          
function drawAxis() {


    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");

    axes.x0 = .5 + .5 * canvas.width;
    // alert(axes.x0 );
    axes.y0 = .5 + .5 * canvas.height;
    // alert( axes.y0 );
    // axes.scale = 50;
    axes.xscale = (canvas.width) / (2 * tmaxs); 	// x pix per s//260000
    axes.yscale = (canvas.height) / (2 * vmaxs);    // y pix per V //43.75
    axes.N = 101;
    //alert(axes.xscale );
//alert(axes.yscale );
//alert(axes.N );

    axes.doNegativeX = true;
    ctx.lineWidth = 0.5;
    ctx.lineWidth = ticklinewidth;
    ctx.strokeStyle = tickcolor;

    drawHorizontalAxis();
    drawVerticalAxis();
    drawVerticalAxisTicks();
    drawHorizontalAxisTicks();
    //  label();

}

function drawGrid(ctx) {

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    for (var x = 0; x < w; x += 43.5) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
    }

    for (var y = 0; y < h; y += 44) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
    }
    ctx.strokeStyle = "Gainsboro";
    ctx.stroke();
}

var axismargin = 30,
        axisorigin = {x: 0, y: 310 - 10},
axistop = axismargin - 30,
        axisright = 520,
        horzntickspcng = 30,
        vrtcltickspcng = 30,
        axiswidth = axisright,
        axisheight = axisorigin.y,
        numofvrtcltick = axisheight / vrtcltickspcng,
        numofhorzntick = axiswidth / horzntickspcng,
        tickwidth = 10,
        ticklinewidth = 0.5,
        tickcolor = 'black',
        axislinewidth = 1.0,
        axiscolor = 'lightgray';

//------------------------------------------------------Horizontal Axis----------------------------------------------------------------------------------//
function drawHorizontalAxis() {
//    ctx.beginPath();
//    ctx.moveTo(axisorigin.x, axisorigin.y-130);
//    ctx.lineTo(axisright, axisorigin.y-130);
//    ctx.stroke();
    var y0 = axes.y0, w = ctx.canvas.width;

//
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.moveTo(0, y0);
    ctx.lineTo(w, y0);  // X axis
    ctx.stroke();
}
////------------------------------------------------------Vertical Axis------------------------------------------------------------------------------------//          
function drawVerticalAxis() {
//    ctx.beginPath();
//    ctx.moveTo(axisorigin.x+270, axisorigin.y+100);
//    ctx.lineTo(axisorigin.x+270, axistop);
//    ctx.stroke();
    var x0 = axes.x0, h = ctx.canvas.height;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, h);  // Y axis
    ctx.stroke();
}
//-------------------------------------------------------Vertical Ticks--------------------------------------------------------------------------------//         
function drawVerticalAxisTicks() {
    var deltaX;

    for (var i = 1; i < numofvrtcltick; ++i) {
        ctx.beginPath();

        if (i % 5 === 0)
            deltaX = tickwidth / 2;
        else
            deltaX = tickwidth / 2;

        ctx.moveTo(axisorigin.x += 180 - deltaX,
                axisorigin.y + 120 - i * vrtcltickspcng);

        ctx.lineTo(axisorigin.x + 180 + deltaX,
                axisorigin.y + 120 - i * vrtcltickspcng);
        ctx.stroke();

    }
}
//-------------------------------------------------------Horizontal Ticks----------------------------------------------------------------------------------//     
function drawHorizontalAxisTicks() {
    var deltaY;

    for (var i = 1; i < numofhorzntick; ++i) {
        ctx.beginPath();

        if (i % 5 === 0)
            deltaY = tickwidth / 2;
        else
            deltaY = tickwidth / 2;

        ctx.moveTo(axisorigin.x + i * horzntickspcng,
                axisorigin.y - 30 - deltaY);

        ctx.lineTo(axisorigin.x + i * horzntickspcng,
                axisorigin.y - 30 + deltaY);

        ctx.stroke();
    }
}

//---------------------------------Print------------------------------------------------//

function printf() {
    window.print();
}

