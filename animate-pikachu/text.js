const codeText = `
/* 让我们来画一只皮卡丘吧*/
/* 首先来画鼻子*/

.nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
}

/* 然后来画眼睛 */
.eye {
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid black;
}

.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    left: 6px;
    top:-1px;
    border: 2px solid black;
}

.eye.left {
    right: 50%;
    margin-right: 90px;
}

.eye.right {
    left: 50%;
    margin-left: 90px;
}

/* 接下来是脸颊 */

.face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}

.face.left {
    right: 50%;
    margin-right: 116px;
}

.face.right {
    left: 50%;
    margin-left: 116px;
}

/* 再然后是上嘴唇 */
.upperLip {
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 47px;
    background: #FEE433;
}

.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}

.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}

/*  接下来是下嘴唇*/

.lowerLip-wrapper {
    height: 110px;
    width: 300px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
}

.lowerLip{
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
}

/* 好啦，画完啦 */
`
