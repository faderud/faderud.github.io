/**
* Class representing the LiveToPreviewTimeline timeline.
*
* Made with Flow
*/

class LiveToPreviewTimeline {
    /**
    * @constructor
    *
    * @param {HTMLElement} rootElement
    *   Root Element of the DOM containing the elements that will be animated in this timeline.
    *
    * @param {String} resourcesPath
    *   The path pointing to the root of the Timeline folder.
    */
    constructor(rootElement, resourcesPath) {
        this.rootElement = rootElement;
        this.resourcesPath = resourcesPath;
        this.imagesFolderPath = resourcesPath + "/img";
        this.loadFillImages();
    }

    /**
    * Returns the timeline's duration in milliseconds.
    */
    get duration() { return 1290 }

	loadFillImages() {
        let pattern;
	}
  
    loadSVGAnimations() {
        this.loadSVGShapeAnimations()
        this.loadSVGShapeMaskAnimations()
    }

    loadSVGShapeAnimations() {
        // Path Animations
        let path;         
        path = this.rootElement.getElementById("widget_base-path")
        path.d = "M0,29c-0,-15.909,13.091,-29,29,-29 0,0,302,0,302,0 15.909,-0,29,13.091,29,29 0,0,0,0,0,0 0,0,-0,144.79,-0,144.79 0,15.909,-13.091,29,-29,29 0,0,-302,0,-302,0 -15.909,0,-29,-13.091,-29,-29 0,0,0,0,0,0 0,0,0,-144.79,0,-144.79zM0,29"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("component_bg-path")
        path.d = "M0,15c-0,-8.229,6.771,-15,15,-15 0,0,310,0,310,0 8.229,0,15,6.771,15,15 0,0,0,44,0,44 0,8.229,-6.771,15,-15,15 0,0,-310,0,-310,0 -8.229,0,-15,-6.771,-15,-15 0,0,0,-44,0,-44zM0,15"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_line_mock2-path")
        path.d = "M0,0c0,0,6,0,6,0 0,0,0,7,0,7 0,0,-6,0,-6,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_line_mock-path")
        path.d = "M0,0c0,0,139,0,139,0 0,0,0,7,0,7 0,0,-139,0,-139,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("icon_v_in_circle-path")
        path.d = "M8,0c4.42,0,8,3.58,8,8 0,4.42,-3.58,8,-8,8 -4.42,0,-8,-3.58,-8,-8 0,-4.42,3.58,-8,8,-8zM10.78,5.09c-0.184,0,-0.355,0.067,-0.482,0.18 0,0,-3.088,3.257,-3.088,3.257 -0.059,0.062,-0.165,0.075,-0.243,0.037 0,0,-0.052,-0.037,-0.052,-0.037 0,0,-1.104,-1.165,-1.104,-1.165 -0.766,-0.827,-1.91,0.329,-1.25,1.161 0,0,0.072,0.082,0.072,0.082 0,0,1.969,2.116,1.969,2.116 0.215,0.227,0.565,0.25,0.807,0.068 0,0,0.076,-0.068,0.076,-0.068 0,0,3.901,-4.116,3.901,-4.116 0.534,-0.563,0.147,-1.534,-0.607,-1.514zM10.78,5.09"
        path.innerHTML = `
<animate
  attributeName="d"
  values="M8,0c4.42,0,8,3.58,8,8 0,4.42,-3.58,8,-8,8 -4.42,0,-8,-3.58,-8,-8 0,-4.42,3.58,-8,8,-8zM10.78,5.09c-0.184,0,-0.355,0.067,-0.482,0.18 0,0,-3.088,3.257,-3.088,3.257 -0.059,0.062,-0.165,0.075,-0.243,0.037 0,0,-0.052,-0.037,-0.052,-0.037 0,0,-1.104,-1.165,-1.104,-1.165 -0.766,-0.827,-1.91,0.329,-1.25,1.161 0,0,0.072,0.082,0.072,0.082 0,0,1.969,2.116,1.969,2.116 0.215,0.227,0.565,0.25,0.807,0.068 0,0,0.076,-0.068,0.076,-0.068 0,0,3.901,-4.116,3.901,-4.116 0.534,-0.563,0.147,-1.534,-0.607,-1.514zM10.78,5.09;M8,0c4.42,0,8,3.58,8,8 0,4.42,-3.58,8,-8,8 -4.42,0,-8,-3.58,-8,-8 0,-4.42,3.58,-8,8,-8zM10.78,5.09c-0.184,0,-0.355,0.067,-0.482,0.18 0,0,-3.088,3.257,-3.088,3.257 -0.059,0.062,-0.165,0.075,-0.243,0.037 0,0,-0.052,-0.037,-0.052,-0.037 0,0,-1.104,-1.165,-1.104,-1.165 -0.766,-0.827,-1.91,0.329,-1.25,1.161 0,0,0.072,0.082,0.072,0.082 0,0,1.969,2.116,1.969,2.116 0.215,0.227,0.565,0.25,0.807,0.068 0,0,0.076,-0.068,0.076,-0.068 0,0,3.901,-4.116,3.901,-4.116 0.534,-0.563,0.147,-1.534,-0.607,-1.514zM10.78,5.09;M0.5,0c0.276,0,0.5,0.224,0.5,0.5 0,0.276,-0.224,0.5,-0.5,0.5 -0.276,0,-0.5,-0.224,-0.5,-0.5 0,-0.276,0.224,-0.5,0.5,-0.5zM0.672,0.32c-0.011,0,-0.022,0.004,-0.03,0.011 0,0,-0.191,0.201,-0.191,0.201 -0.004,0.004,-0.01,0.005,-0.015,0.002 0,0,-0.003,-0.002,-0.003,-0.002 0,0,-0.068,-0.072,-0.068,-0.072 -0.047,-0.051,-0.118,0.02,-0.077,0.072 0,0,0.004,0.005,0.004,0.005 0,0,0.122,0.131,0.122,0.131 0.013,0.014,0.035,0.015,0.05,0.004 0,0,0.005,-0.004,0.005,-0.004 0,0,0.241,-0.255,0.241,-0.255 0.033,-0.035,0.009,-0.095,-0.038,-0.094zM0.672,0.32;M0.5,0c0.276,0,0.5,0.224,0.5,0.5 0,0.276,-0.224,0.5,-0.5,0.5 -0.276,0,-0.5,-0.224,-0.5,-0.5 0,-0.276,0.224,-0.5,0.5,-0.5zM0.672,0.32c-0.011,0,-0.022,0.004,-0.03,0.011 0,0,-0.191,0.201,-0.191,0.201 -0.004,0.004,-0.01,0.005,-0.015,0.002 0,0,-0.003,-0.002,-0.003,-0.002 0,0,-0.068,-0.072,-0.068,-0.072 -0.047,-0.051,-0.118,0.02,-0.077,0.072 0,0,0.004,0.005,0.004,0.005 0,0,0.122,0.131,0.122,0.131 0.013,0.014,0.035,0.015,0.05,0.004 0,0,0.005,-0.004,0.005,-0.004 0,0,0.241,-0.255,0.241,-0.255 0.033,-0.035,0.009,-0.095,-0.038,-0.094zM0.672,0.32"
  dur="1.29s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.232558;0.317829;1"
  keySplines="0 0 1 1;0.42 0 0.58 1;0.42 0 0.58 1"
/>
<animate
  attributeName="viewBox"
  values="0 0 16 16;0 0 16 16;0 0 1 1;0 0 1 1"
  dur="1.29s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.232558;0.317829;1"
  keySplines="0 0 1 1;0.42 0 0.58 1;0.42 0 0.58 1"
/>`
         
        path = this.rootElement.getElementById("primary_btn_bg-path")
        path.d = "M-0,16c-0,-8.777,7.223,-16,16,-16 0,0,57,0,57,0 8.777,0,16,7.223,16,16 0,0,0,0,0,0 0,8.777,-7.223,16,-16,16 0,0,-57,0,-57,0 -8.777,0,-16,-7.223,-16,-16 0,0,0,0,0,0 0,0,0,-0,0,-0zM-0,16"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("header_bg-path")
        path.d = "M331,0c16.016,0,29,12.984,29,29 0,0,0,95,0,95 -47.577,19.8,-104.046,29.799,-169.407,29.997 0,0,-1.983,0.003,-1.983,0.003 -66.203,0,-129.073,6.667,-188.609,20 0,0,0,-145,0,-145 0,-16.016,12.984,-29,29,-29 0,0,302,0,302,0zM331,0"
        path.innerHTML = `

<animate
  attributeName="fill"
  values="#41A7FC;#41A7FC;#F6823F;#F6823F"
  dur="1.29s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.232558;0.527132;1"
  keySplines="0 0 1 1;0.42 0 0.58 1;0.42 0 0.58 1"
/>`
         
        path = this.rootElement.getElementById("status_indicator-path")
        path.d = "M-0,4c-0,-2.194,1.806,-4,4,-4 0,0,0,0,0,0 2.194,-0,4,1.806,4,4 0,0,0,0,0,0 0,0,-0,0,-0,0 0,2.194,-1.806,4,-4,4 -0,0,-0,0,-0,0 0,0,-0,0,-0,0 -2.194,-0,-4,-1.806,-4,-4 0,0,0,-0,0,-0zM-0,4"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("btn_base-path")
        path.d = "M-0.005,14.6c0,-8.007,6.588,-14.595,14.595,-14.595 0,0,0,0,0,0 0,0,0,0,0,0 8.007,0,14.595,6.588,14.595,14.595 0,0,0,0.24,0,0.24 0,8.007,-6.588,14.595,-14.595,14.595 0,0,-0,0,-0,0 -8.007,0,-14.595,-6.588,-14.595,-14.595 0,-0,0,-0,0,-0 0,0,0,-0.24,0,-0.24zM-0.005,14.6"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("arrow_small-path")
        path.d = "M6.436,-0.005c0.218,0,0.414,0.09,0.556,0.235 0.144,0.143,0.233,0.341,0.233,0.56 0,0.04,-0.003,0.079,-0.009,0.117 0,0,-0.001,5.592,-0.001,5.592 0,0.434,-0.349,0.786,-0.779,0.786 -0.43,0,-0.779,-0.352,-0.779,-0.786 0,0,0,-4.924,0,-4.924 0,0,-4.883,0.001,-4.883,0.001 -0.395,0,-0.721,-0.296,-0.772,-0.679 0,0,-0.007,-0.107,-0.007,-0.107 0,-0.434,0.349,-0.786,0.779,-0.786 0,0,5.546,-0.001,5.546,-0.001 0.038,-0.006,0.077,-0.009,0.116,-0.009zM6.436,-0.005"
        path.innerHTML = `

<animate
  attributeName="fill"
  values="#28AAFF;#28AAFF;#E2782B"
  dur="1.29s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.232558;1"
  keySplines="0 0 1 1;0.42 0 0.58 1"
/>`
         
        path = this.rootElement.getElementById("arrow_big-path")
        path.d = "M9.244,0c0.288,0,0.551,0.11,0.749,0.29 0,0,0.013,0.014,0.013,0.014 0.227,0.206,0.369,0.505,0.369,0.837 0,0.057,-0.004,0.112,-0.012,0.167 0,0,-0.001,8.025,-0.001,8.025 0,0.623,-0.5,1.128,-1.118,1.128 -0.617,0,-1.118,-0.505,-1.118,-1.128 0,0,-0,-7.064,-0,-7.064 0,0,-7.003,0,-7.003,0 -0.576,0,-1.051,-0.44,-1.111,-1.005 0,0,-0.007,-0.123,-0.007,-0.123 0,-0.623,0.5,-1.128,1.118,-1.128 0,0,7.956,-0.001,7.956,-0.001 0.054,-0.008,0.109,-0.012,0.165,-0.012zM9.244,0"
        path.innerHTML = `

<animate
  attributeName="fill"
  values="#28AAFF;#28AAFF;#E2782B"
  dur="1.29s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.232558;1"
  keySplines="0 0 1 1;0.42 0 0.58 1"
/>`

        // Gradient Animations
        let defs;    } 

    loadSVGShapeMaskAnimations() {    } 

    /**
    * @return
    * Returns the list of svg shapes that are animated in this timeline.
    */
    get allShapes() {
        return [
            this.rootElement.querySelector("#LiveToPreview .widget_base-svg"),
            this.rootElement.querySelector("#LiveToPreview .header_bg-svg"),
            this.rootElement.querySelector("#LiveToPreview .status_indicator-svg"),
            this.rootElement.querySelector("#LiveToPreview .btn_base-svg"),
            this.rootElement.querySelector("#LiveToPreview .arrow_small-svg"),
            this.rootElement.querySelector("#LiveToPreview .arrow_big-svg"),
            this.rootElement.querySelector("#LiveToPreview .component_bg-svg"),
            this.rootElement.querySelector("#LiveToPreview .text_line_mock2-svg"),
            this.rootElement.querySelector("#LiveToPreview .text_line_mock-svg"),
            this.rootElement.querySelector("#LiveToPreview .icon_v_in_circle-svg"),
            this.rootElement.querySelector("#LiveToPreview .primary_btn_bg-svg"),
        ]
    }

    artboardAnimation() {
        // Workaround for Safari bug
        return this.rootElement.querySelector('#LiveToPreview.flow-artboard').animate({
        backgroundPosition: ['0px', '1px'],
        }, {
            delay: 0,
            duration: 1290,
        });
    }
    widget_baseAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .widget_base').animate({
            top: ['101.4px', '112px'],
            height: ['202.79px', '224px'],

        }, {
            delay: 300,
            duration: 510,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .header_bg-svg').animate({
            fill: ['#41A7FC', '#F6823F'],

        }, {
            delay: 300,
            duration: 380,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_titleAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .header_title').animate({
            opacity: [1, 0],

        }, {
            delay: 300,
            duration: 240,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_titleAnimation1() {
        return this.rootElement.querySelector('#LiveToPreview .header_title').animate({
            width: ['98px', '117px'],
            left: ['95px', '104.5px'],

        }, {
            delay: 300,
            duration: 560,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_titleAnimation2() {
        return this.rootElement.querySelector('#LiveToPreview .header_title').animate({

        }, {
            delay: 300,
            duration: 239,
            easing: 'steps(1)',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_titleAnimation3() {
        return this.rootElement.querySelector('#LiveToPreview .header_title').animate({
            opacity: [0, 1],

        }, {
            delay: 540,
            duration: 320,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .arrow_small-svg').animate({
            fill: ['#28AAFF', '#E2782B'],

        }, {
            delay: 300,
            duration: 990,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .arrow_big-svg').animate({
            fill: ['#28AAFF', '#E2782B'],

        }, {
            delay: 300,
            duration: 990,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    cardAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .card').animate({
            top: ['145px', '153.5px'],
            height: ['74px', '91px'],

        }, {
            delay: 300,
            duration: 990,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    component_bgAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .component_bg').animate({
            top: ['37px', '45.5px'],
            height: ['74px', '91px'],

        }, {
            delay: 300,
            duration: 510,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock2Animation0() {
        return this.rootElement.querySelector('#LiveToPreview .text_line_mock2').animate({
            width: ['6px', '147px'],
            opacity: [0, 0.3],
            left: ['33px', '103.5px'],

        }, {
            delay: 370,
            duration: 300,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mockAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .text_line_mock').animate({
            width: ['139px', '95px'],
            left: ['113.5px', '77.5px'],

        }, {
            delay: 300,
            duration: 290,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    icon_v_in_circleAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .icon_v_in_circle').animate({
            left: ['28px', '20.5px'],
            height: ['16px', '1px'],
            opacity: [1, 0],
            top: ['36.6px', '29.5px'],
            width: ['16px', '1px'],

        }, {
            delay: 300,
            duration: 110,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    primary_btnAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .primary_btn').animate({
            left: ['275.5px', '271px'],
            top: ['38px', '47px'],
            width: ['89px', '78px'],

        }, {
            delay: 300,
            duration: 200,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    primary_btn_bgAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .primary_btn_bg').animate({
            width: ['89px', '78px'],
            left: ['44.5px', '39px'],

        }, {
            delay: 300,
            duration: 200,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    primary_btn_textAnimation0() {
        return this.rootElement.querySelector('#LiveToPreview .primary_btn_text').animate({
            width: ['61px', '48px'],
            left: ['44px', '38.5px'],

        }, {
            delay: 300,
            duration: 200,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    primary_btn_textAnimation1() {
        return this.rootElement.querySelector('#LiveToPreview .primary_btn_text').animate({

        }, {
            delay: 300,
            duration: 100,
            easing: 'steps(1)',
            composite: 'add',
            fill: 'forwards',
        });
    }

    /**
    * Creates and returns all animations for this timeline.
    */
    createAllAnimations() {
        return [
            this.artboardAnimation(),
            this.widget_baseAnimation0(),
            this.header_bgShapeAnimation0(),
            this.header_titleAnimation0(),
            this.header_titleAnimation1(),
            this.header_titleAnimation2(),
            this.header_titleAnimation3(),
            this.arrow_smallShapeAnimation0(),
            this.arrow_bigShapeAnimation0(),
            this.cardAnimation0(),
            this.component_bgAnimation0(),
            this.text_line_mock2Animation0(),
            this.text_line_mockAnimation0(),
            this.icon_v_in_circleAnimation0(),
            this.primary_btnAnimation0(),
            this.primary_btn_bgAnimation0(),
            this.primary_btn_textAnimation0(),
            this.primary_btn_textAnimation1(),
        ]
    }
}

Object.freeze(LiveToPreviewTimeline)
