/**
* Class representing the WidgetMockAnimationReverseTimeline timeline.
*
* Made with Flow
*/

class WidgetMockAnimationReverseTimeline {
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
    get duration() { return 6200 }

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
        path.d = "M0,482.63c0,0,360,0,360,0 0,0,0,-482.63,0,-482.63 0,0,-360,0,-360,0 0,0,0,482.63,0,482.63zM0,482.63"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("header_bg-path")
        path.d = "M360,0c0,-0,0,124,0,124 -47.577,19.8,-104.046,29.799,-169.407,29.997 0,0,-1.983,0.003,-1.983,0.003 -66.203,0,-129.073,6.667,-188.609,20 0,0,0,-174,0,-174 0,0,360,0,360,0zM360,0"
        path.innerHTML = `

<animate
  attributeName="fill"
  values="#6E6EE8;#6E6EE8;#F6823F;#F6823F;#0ACA73;#0ACA73;#41A7FC"
  dur="6.2s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.551613;0.659677;0.722581;0.798387;0.887097;1"
  keySplines="0 0 1 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
/>`
         
        path = this.rootElement.getElementById("card_bg-path")
        path.d = "M0,217c0,0,340,0,340,0 0,0,0,-217,0,-217 0,0,-340,0,-340,0 0,0,0,217,0,217zM0,217"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("status_indicator-path")
        path.d = "M-0,4c-0,-2.194,1.806,-4,4,-4 0,0,0,0,0,0 2.194,0,4,1.806,4,4 0,0,0,0,0,0 0,2.194,-1.806,4,-4,4 -0,0,-0,0,-0,0 0,0,-0,0,-0,0 -2.194,-0,-4,-1.806,-4,-4 0,0,0,-0,0,-0zM-0,4"
        path.innerHTML = `

<animate
  attributeName="fill"
  values="#FFA15D;#FFA15D;#35FDA2;#35FDA2"
  dur="6.2s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.630645;0.664516;1"
  keySplines="0 0 1 1;0.42 0 0.58 1;0.42 0 0.58 1"
/>`
         
        path = this.rootElement.getElementById("rectangle_2-path")
        path.d = "M0,0c0,0,100,0,100,0 0,0,0,7,0,7 0,0,-100,0,-100,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_5-path")
        path.d = "M7.059,0c0.83,-0.02,1.255,0.981,0.668,1.561 0,0,-4.292,4.243,-4.292,4.243 -0.263,0.26,-0.709,0.26,-0.972,0 0,0,-2.166,-2.182,-2.166,-2.182 -0.891,-0.861,0.425,-2.162,1.296,-1.281 0,0,1.215,1.201,1.215,1.201 0.081,0.08,0.243,0.08,0.324,0 0,0,3.32,-3.283,3.32,-3.283 0.142,-0.16,0.364,-0.26,0.607,-0.26 0,0,0,0,0,0zM7.059,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_3-path")
        path.d = "M0,0c0,0,151,0,151,0 0,0,0,7,0,7 0,0,-151,0,-151,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_6-path")
        path.d = "M7.059,0c0.83,-0.02,1.255,0.981,0.668,1.561 0,0,-4.292,4.243,-4.292,4.243 -0.263,0.26,-0.709,0.26,-0.972,0 0,0,-2.166,-2.182,-2.166,-2.182 -0.891,-0.861,0.425,-2.162,1.296,-1.281 0,0,1.215,1.201,1.215,1.201 0.081,0.08,0.243,0.08,0.324,0 0,0,3.32,-3.283,3.32,-3.283 0.142,-0.16,0.364,-0.26,0.607,-0.26 0,0,0,0,0,0zM7.059,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("status_indicator_pending-path")
        path.d = "M-0,4c-0,-2.194,1.806,-4,4,-4 0,0,0,0,0,0 2.194,-0,4,1.806,4,4 0,0,0,0,0,0 0,0,-0,0,-0,0 0,2.194,-1.806,4,-4,4 -0,0,-0,0,-0,0 0,0,-0,0,-0,0 -2.194,-0,-4,-1.806,-4,-4 0,0,0,-0,0,-0zM-0,4"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_4-path")
        path.d = "M0,0c0,0,61,0,61,0 0,0,0,7,0,7 0,0,-61,0,-61,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_7-path")
        path.d = "M7.059,0c0.83,-0.02,1.255,0.981,0.668,1.561 0,0,-4.292,4.243,-4.292,4.243 -0.263,0.26,-0.709,0.26,-0.972,0 0,0,-2.166,-2.182,-2.166,-2.182 -0.891,-0.861,0.425,-2.162,1.296,-1.281 0,0,1.215,1.201,1.215,1.201 0.081,0.08,0.243,0.08,0.324,0 0,0,3.32,-3.283,3.32,-3.283 0.142,-0.16,0.364,-0.26,0.607,-0.26 0,0,0,0,0,0zM7.059,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_line_mock_3-path")
        path.d = "M0,0c0,0,61,0,61,0 0,0,0,7,0,7 0,0,-61,0,-61,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("primary_btn_bg_2-path")
        path.d = "M0,16c-0,-8.777,7.223,-16,16,-16 0,0,104,0,104,0 8.777,0,16,7.223,16,16 0,0,0,0,0,0 0,8.777,-7.223,16,-16,16 0,0,-104,-0,-104,-0 -8.777,0,-16,-7.223,-16,-16 0,0,0,-0,0,-0zM0,16"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("secondary_btn_bg-path")
        path.d = "M0,16c-0,-8.777,7.223,-16,16,-16 0,0,104,0,104,0 8.777,0,16,7.223,16,16 0,0,0,0,0,0 0,8.777,-7.223,16,-16,16 0,0,-104,-0,-104,-0 -8.777,0,-16,-7.223,-16,-16 0,0,0,-0,0,-0zM0,16"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_line_mock2-path")
        path.d = "M0,0c0,0,147,0,147,0 0,0,0,7,0,7 0,0,-147,0,-147,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_line_mock_2-path")
        path.d = "M0,0c0,0,95,0,95,0 0,0,0,7,0,7 0,0,-95,0,-95,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("primary_btn_bg_1-path")
        path.d = "M0,16c-0,-8.777,7.223,-16,16,-16 0,0,46,0,46,0 8.777,0,16,7.223,16,16 0,0,0,0,0,0 0,8.777,-7.223,16,-16,16 0,0,-46,-0,-46,-0 -8.777,0,-16,-7.223,-16,-16 0,0,0,-0,0,-0zM0,16"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_1-path")
        path.d = "M0,0c0,0,71,0,71,0 0,0,0,7,0,7 0,0,-71,0,-71,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("shape-path")
        path.d = "M3,0c0.276,0,0.5,0.224,0.5,0.5 0,0.245,-0.177,0.45,-0.41,0.492 0,0,-0.09,0.008,-0.09,0.008 0,0,-1,0,-1,0 -0.513,0,-0.936,0.386,-0.993,0.883 0,0,-0.007,0.117,-0.007,0.117 0,0,0,7,0,7 0,0.513,0.386,0.936,0.883,0.993 0,0,0.117,0.007,0.117,0.007 0,0,7,0,7,0 0.513,0,0.936,-0.386,0.993,-0.883 0,0,0.007,-0.117,0.007,-0.117 0,0,0,-0.5,0,-0.5 0,0,0.008,-0.09,0.008,-0.09 0.042,-0.233,0.246,-0.41,0.492,-0.41 0.245,0,0.45,0.177,0.492,0.41 0,0,0.008,0.09,0.008,0.09 0,0,0,0.5,0,0.5 0,1.105,-0.895,2,-2,2 0,0,-7,0,-7,0 -1.105,0,-2,-0.895,-2,-2 0,0,0,-7,0,-7 0,-1.105,0.895,-2,2,-2 0,0,1,0,1,0zM9,0c1.104,0,2,0.895,2,2 0,0,0,3.999,0,3.999 0,0.552,-0.448,1,-1,1 -0.552,0,-1,-0.448,-1,-1 0,0,0,-2.587,0,-2.587 0,0,-3.414,3.415,-3.414,3.415 -0.39,0.39,-1.023,0.39,-1.414,0 -0.39,-0.39,-0.39,-1.023,0,-1.414 0,0,3.414,-3.415,3.414,-3.415 0,0,-2.586,0.001,-2.586,0.001 -0.552,0,-1,-0.448,-1,-1 0,-0.552,0.448,-1,1,-1 0,0,3.999,0,3.999,0zM9,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_line_mock_1-path")
        path.d = "M0,0c0,0,61,0,61,0 0,0,0,7,0,7 0,0,-61,0,-61,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path-path")
        path.d = "M4.452,8.562c-0.78,-0.735,-1.239,-1.745,-1.239,-2.892 0,-1.148,0.459,-2.158,1.193,-2.892 0.643,-0.643,0.643,-1.653,0,-2.296 -0.643,-0.643,-1.652,-0.643,-2.295,0 -1.285,1.331,-2.111,3.168,-2.111,5.188 0,2.02,0.826,3.857,2.157,5.188 0.643,0.643,1.652,0.643,2.295,0 0.597,-0.643,0.597,-1.653,0,-2.296zM4.452,8.562"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_1-path")
        path.d = "M2.77,4.452c0.734,-0.78,1.743,-1.239,2.89,-1.239 1.147,0,2.156,0.459,2.89,1.193 0.642,0.643,1.651,0.643,2.294,0 0.642,-0.643,0.642,-1.652,0,-2.295 -1.33,-1.285,-3.165,-2.111,-5.183,-2.111 -2.018,0,-3.853,0.826,-5.183,2.157 -0.642,0.643,-0.642,1.652,0,2.295 0.642,0.597,1.651,0.597,2.294,0zM2.77,4.452"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_2-path")
        path.d = "M8.55,0.448c-0.734,0.78,-1.743,1.239,-2.89,1.239 -1.147,0,-2.156,-0.459,-2.89,-1.193 -0.642,-0.643,-1.651,-0.643,-2.294,0 -0.642,0.643,-0.642,1.652,0,2.295 1.33,1.285,3.165,2.111,5.183,2.111 2.018,0,3.853,-0.826,5.183,-2.157 0.642,-0.643,0.642,-1.652,0,-2.295 -0.642,-0.597,-1.651,-0.597,-2.294,0zM8.55,0.448"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_3-path")
        path.d = "M1.6,3.215c0.886,0,1.605,-0.719,1.605,-1.605 0,-0.886,-0.719,-1.605,-1.605,-1.605 -0.886,0,-1.605,0.719,-1.605,1.605 0,0.886,0.719,1.605,1.605,1.605zM1.6,3.215"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_4-path")
        path.d = "M1.6,3.215c0.886,0,1.605,-0.719,1.605,-1.605 0,-0.886,-0.719,-1.605,-1.605,-1.605 -0.886,0,-1.605,0.719,-1.605,1.605 0,0.886,0.719,1.605,1.605,1.605zM1.6,3.215"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_field_single_line_base-path")
        path.d = "M0,2c-0,-1.097,0.903,-2,2,-2 0,0,276,0,276,0 1.097,0,2,0.903,2,2 0,0,0,31,0,31 0,1.097,-0.903,2,-2,2 0,0,-276,0,-276,0 -1.097,0,-2,-0.903,-2,-2 0,0,0,0,0,0 0,0,0,-31,0,-31zM0,2"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle-path")
        path.d = "M0,0c0,0,203,0,203,0 0,0,0,7,0,7 0,0,-203,0,-203,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_line_mock-path")
        path.d = "M0,0c0,0,139,0,139,0 0,0,0,7,0,7 0,0,-139,0,-139,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("icon_v_in_circle-path")
        path.d = "M8,0c4.42,0,8,3.58,8,8 0,4.42,-3.58,8,-8,8 -4.42,0,-8,-3.58,-8,-8 0,-4.42,3.58,-8,8,-8zM10.78,5.09c-0.184,0,-0.355,0.067,-0.482,0.18 0,0,-3.088,3.257,-3.088,3.257 -0.059,0.062,-0.165,0.075,-0.243,0.037 0,0,-0.052,-0.037,-0.052,-0.037 0,0,-1.104,-1.165,-1.104,-1.165 -0.766,-0.827,-1.91,0.329,-1.25,1.161 0,0,0.072,0.082,0.072,0.082 0,0,1.969,2.116,1.969,2.116 0.215,0.227,0.565,0.25,0.807,0.068 0,0,0.076,-0.068,0.076,-0.068 0,0,3.901,-4.116,3.901,-4.116 0.534,-0.563,0.147,-1.534,-0.607,-1.514zM10.78,5.09"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("primary_btn_bg-path")
        path.d = "M0,16c-0,-8.777,7.223,-16,16,-16 0,0,57,0,57,0 8.777,0,16,7.223,16,16 0,0,0,0,0,0 0,8.777,-7.223,16,-16,16 0,0,-57,-0,-57,-0 -8.777,0,-16,-7.223,-16,-16 0,0,0,-0,0,-0zM0,16"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("btn_base-path")
        path.d = "M-0.005,14.6c0,-8.007,6.588,-14.595,14.595,-14.595 0,0,0,0,0,0 0,0,-0,-0,-0,-0 8.007,0,14.595,6.588,14.595,14.595 0,0,-0,0.24,-0,0.24 0,8.007,-6.588,14.595,-14.595,14.595 0,0,-0,0,-0,0 -8.007,0,-14.595,-6.588,-14.595,-14.595 0,0,0,0,0,0 0,0,0,-0.24,0,-0.24zM-0.005,14.6"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("arrow_small-path")
        path.d = "M6.436,-0.005c0.218,0,0.414,0.09,0.556,0.235 0.144,0.143,0.233,0.341,0.233,0.56 0,0.04,-0.003,0.079,-0.009,0.117 0,0,-0.001,5.592,-0.001,5.592 0,0.434,-0.349,0.786,-0.779,0.786 -0.43,0,-0.779,-0.352,-0.779,-0.786 0,0,0,-4.924,0,-4.924 0,0,-4.883,0.001,-4.883,0.001 -0.395,0,-0.721,-0.296,-0.772,-0.679 0,0,-0.007,-0.107,-0.007,-0.107 0,-0.434,0.349,-0.786,0.779,-0.786 0,0,5.546,-0.001,5.546,-0.001 0.038,-0.006,0.077,-0.009,0.116,-0.009zM6.436,-0.005"
        path.innerHTML = `

<animate
  attributeName="fill"
  values="#6E6EE8;#6E6EE8;#F68240;#F68240;#0BCA73;#0BCA73;#41A8FC"
  dur="6.2s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.551613;0.659677;0.722581;0.798387;0.887097;1"
  keySplines="0 0 1 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
/>`
         
        path = this.rootElement.getElementById("arrow_big-path")
        path.d = "M9.244,0c0.288,0,0.551,0.11,0.749,0.29 0,0,0.013,0.014,0.013,0.014 0.227,0.206,0.369,0.505,0.369,0.837 0,0.057,-0.004,0.112,-0.012,0.167 0,0,-0.001,8.025,-0.001,8.025 0,0.623,-0.5,1.128,-1.118,1.128 -0.617,0,-1.118,-0.505,-1.118,-1.128 0,0,-0,-7.064,-0,-7.064 0,0,-7.003,0,-7.003,0 -0.576,0,-1.051,-0.44,-1.111,-1.005 0,0,-0.007,-0.123,-0.007,-0.123 0,-0.623,0.5,-1.128,1.118,-1.128 0,0,7.956,-0.001,7.956,-0.001 0.054,-0.008,0.109,-0.012,0.165,-0.012zM9.244,0"
        path.innerHTML = `

<animate
  attributeName="fill"
  values="#6E6EE8;#6E6EE8;#F68240;#F68240;#0BCA73;#0BCA73;#41A8FC"
  dur="6.2s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.551613;0.659677;0.722581;0.798387;0.887097;1"
  keySplines="0 0 1 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
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
            this.rootElement.querySelector("#WidgetMockAnimation .widget_base-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .header_bg-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .card_bg-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .btn_base-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .arrow_small-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .arrow_big-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .primary_btn_bg-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .text_line_mock-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .icon_v_in_circle-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .text_field_single_line_base-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .rectangle-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .rectangle_1-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .path-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .path_1-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .path_2-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .path_3-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .path_4-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .shape-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .text_line_mock_1-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .text_line_mock2-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .text_line_mock_2-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .primary_btn_bg_1-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .secondary_btn_bg-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .primary_btn_bg_2-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .rectangle_2-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .path_5-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .rectangle_3-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .path_6-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .status_indicator_pending-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .rectangle_4-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .path_7-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .text_line_mock_3-svg"),
            this.rootElement.querySelector("#WidgetMockAnimation .status_indicator-svg"),
        ]
    }

    artboardAnimation() {
        // Workaround for Safari bug
        return this.rootElement.querySelector('#WidgetMockAnimation.flow-artboard').animate({
        backgroundPosition: ['0px', '1px'],
        }, {
            delay: 0,
            duration: 6200,
        });
    }
    widgetAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['351px', '224px'],

        }, {
            delay: 3420,
            duration: 670,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    widgetAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['224px', '224px'],

        }, {
            delay: 4090,
            duration: 390,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    widgetAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['224px', '308px'],

        }, {
            delay: 4480,
            duration: 470,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    widgetAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['308px', '308px'],

        }, {
            delay: 4950,
            duration: 550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    widgetAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['308px', '206px'],

        }, {
            delay: 5500,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#6E6EE8', '#F6823F'],

        }, {
            delay: 3420,
            duration: 670,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#F6823F', '#F6823F'],

        }, {
            delay: 4090,
            duration: 390,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#F6823F', '#0ACA73'],

        }, {
            delay: 4480,
            duration: 470,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#0ACA73', '#0ACA73'],

        }, {
            delay: 4950,
            duration: 550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#0ACA73', '#41A7FC'],

        }, {
            delay: 5500,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['217px', '91px'],

        }, {
            delay: 3420,
            duration: 670,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['91px', '91px'],

        }, {
            delay: 4090,
            duration: 390,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['91px', '175px'],

        }, {
            delay: 4480,
            duration: 470,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['175px', '175px'],

        }, {
            delay: 4950,
            duration: 550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['175px', '74px'],

        }, {
            delay: 5500,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_small-svg').animate({
            fill: ['#6E6EE8', '#F68240'],

        }, {
            delay: 3420,
            duration: 670,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_small-svg').animate({
            fill: ['#F68240', '#F68240'],

        }, {
            delay: 4090,
            duration: 390,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_small-svg').animate({
            fill: ['#F68240', '#0BCA73'],

        }, {
            delay: 4480,
            duration: 470,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_small-svg').animate({
            fill: ['#0BCA73', '#0BCA73'],

        }, {
            delay: 4950,
            duration: 550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_small-svg').animate({
            fill: ['#0BCA73', '#41A8FC'],

        }, {
            delay: 5500,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_big-svg').animate({
            fill: ['#6E6EE8', '#F68240'],

        }, {
            delay: 3420,
            duration: 670,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_big-svg').animate({
            fill: ['#F68240', '#F68240'],

        }, {
            delay: 4090,
            duration: 390,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_big-svg').animate({
            fill: ['#F68240', '#0BCA73'],

        }, {
            delay: 4480,
            duration: 470,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_big-svg').animate({
            fill: ['#0BCA73', '#0BCA73'],

        }, {
            delay: 4950,
            duration: 550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_big-svg').animate({
            fill: ['#0BCA73', '#41A8FC'],

        }, {
            delay: 5500,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_edit_pageAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_edit_page').animate({
            opacity: [0, 1],

        }, {
            delay: 5700,
            duration: 310,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mockAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock').animate({
            opacity: [0, 0.4],

        }, {
            delay: 5880,
            duration: 320,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    icon_v_in_circleAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .icon_v_in_circle').animate({
            opacity: [0, 1],

        }, {
            delay: 5810,
            duration: 300,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_fieldAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_field').animate({
            opacity: [1, 0.95],

        }, {
            delay: 5110,
            duration: 380,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_field_single_line_baseAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_field_single_line_base').animate({
            opacity: [0, 1],

        }, {
            delay: 4840,
            duration: 140,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_field_single_line_baseAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_field_single_line_base').animate({
            opacity: [1, 1],

        }, {
            delay: 4980,
            duration: 130,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_field_single_line_baseAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_field_single_line_base').animate({
            opacity: [1, 0],

        }, {
            delay: 5110,
            duration: 380,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangleAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle').animate({
            opacity: [0, 0.3],

        }, {
            delay: 4870,
            duration: 130,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangleAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle').animate({
            opacity: [0.3, 0],

        }, {
            delay: 5000,
            duration: 1200,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangleAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle').animate({
            width: ['203px', '1px'],

        }, {
            delay: 5110,
            duration: 430,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_1Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_1').animate({
            opacity: [0, 0.3],

        }, {
            delay: 4800,
            duration: 160,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_1Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_1').animate({
            opacity: [0.3, 0],

        }, {
            delay: 4960,
            duration: 1240,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_1Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_1').animate({
            width: ['71px', '0.01px'],

        }, {
            delay: 5220,
            duration: 370,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    contentful_avatarAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .contentful_avatar').animate({
            opacity: [0, 1],

        }, {
            delay: 4850,
            duration: 80,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    contentful_avatarAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .contentful_avatar').animate({
            opacity: [1, 1],

        }, {
            delay: 4930,
            duration: 510,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    contentful_avatarAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .contentful_avatar').animate({
            opacity: [1, 0],
            height: ['15px', '1.15px'],
            width: ['13px', '1px'],

        }, {
            delay: 5440,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    contentfulAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .contentful').animate({
            width: ['13px', '1px'],
            top: ['7.5px', '0.58px'],
            height: ['15px', '1.15px'],
            left: ['6.5px', '0.5px'],

        }, {
            delay: 5440,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    pathAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path').animate({
            width: ['4.9px', '0.38px'],
            top: ['7.54px', '0.58px'],
            left: ['2.45px', '0.19px'],
            height: ['11.34px', '0.87px'],

        }, {
            delay: 5440,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_1Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_1').animate({
            height: ['4.9px', '0.38px'],
            top: ['2.64px', '0.2px'],
            width: ['11.33px', '0.87px'],
            left: ['7.34px', '0.56px'],

        }, {
            delay: 5440,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_2Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_2').animate({
            left: ['7.34px', '0.56px'],
            height: ['4.9px', '0.38px'],
            width: ['11.33px', '0.87px'],
            top: ['12.44px', '0.95px'],

        }, {
            delay: 5440,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_3Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_3').animate({
            height: ['3.21px', '0.25px'],
            top: ['3.5px', '0.27px'],
            left: ['3.3px', '0.25px'],
            width: ['3.21px', '0.25px'],

        }, {
            delay: 5440,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_4Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_4').animate({
            top: ['11.58px', '0.89px'],
            width: ['3.21px', '0.25px'],
            height: ['3.21px', '0.25px'],
            left: ['3.3px', '0.25px'],

        }, {
            delay: 5440,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    shapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .shape').animate({
            opacity: [0, 1],

        }, {
            delay: 4880,
            duration: 70,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    shapeAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .shape').animate({
            opacity: [1, 1],

        }, {
            delay: 4950,
            duration: 380,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    shapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .shape').animate({
            height: ['11px', '1px'],
            width: ['11px', '1px'],
            opacity: [1, 0],

        }, {
            delay: 5330,
            duration: 150,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_1Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_1').animate({
            opacity: [0, 0.4],

        }, {
            delay: 4760,
            duration: 140,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_1Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_1').animate({
            opacity: [0.4, 0.4],

        }, {
            delay: 4900,
            duration: 560,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_1Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_1').animate({
            width: ['61px', '0.01px'],
            opacity: [0.4, 0],

        }, {
            delay: 5460,
            duration: 280,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock2Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock2').animate({
            opacity: [0, 0.3],

        }, {
            delay: 4150,
            duration: 160,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock2Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock2').animate({
            opacity: [0.3, 0.3],

        }, {
            delay: 4310,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock2Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock2').animate({
            width: ['147px', '1px'],
            opacity: [0.3, 0],

        }, {
            delay: 4540,
            duration: 160,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_2Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_2').animate({
            opacity: [0, 0.4],

        }, {
            delay: 4070,
            duration: 150,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_2Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_2').animate({
            opacity: [0.4, 0.4],

        }, {
            delay: 4220,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_2Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_2').animate({
            opacity: [0.4, 0],
            width: ['95px', '0.01px'],

        }, {
            delay: 4620,
            duration: 150,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_publishAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_publish').animate({
            opacity: [0, 1],

        }, {
            delay: 4010,
            duration: 140,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_publishAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_publish').animate({
            opacity: [1, 1],

        }, {
            delay: 4150,
            duration: 290,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_publishAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_publish').animate({
            opacity: [1, 0],

        }, {
            delay: 4440,
            duration: 130,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_view_logAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_view_log').animate({
            opacity: [1, 0],

        }, {
            delay: 3300,
            duration: 210,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_refreshAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_refresh').animate({
            opacity: [1, 0.2],

        }, {
            delay: 0,
            duration: 240,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_refreshAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_refresh').animate({
            opacity: [0.2, 0.2],

        }, {
            delay: 240,
            duration: 3010,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_refreshAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_refresh').animate({
            opacity: [0.2, 0],

        }, {
            delay: 3250,
            duration: 210,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_2Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_2').animate({
            opacity: [0.3, 0.1],

        }, {
            delay: 130,
            duration: 160,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_2Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_2').animate({
            opacity: [0.1, 0.1],

        }, {
            delay: 290,
            duration: 3050,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_2Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_2').animate({
            opacity: [0.1, 0],
            width: ['100px', '1px'],

        }, {
            delay: 3340,
            duration: 210,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_2Animation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_2').animate({
            width: ['1px', '100px'],

        }, {
            delay: 3550,
            duration: 2650,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_5Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_5').animate({
            height: ['6px', '0.75px'],
            width: ['8px', '1px'],
            opacity: [1, 0],
            left: ['-53.95px', '-57.45px'],

        }, {
            delay: 200,
            duration: 120,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_5Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_5').animate({
            height: ['0.75px', '6px'],
            width: ['1px', '8px'],
            left: ['-57.45px', '-53.95px'],

        }, {
            delay: 320,
            duration: 5880,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_3Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_3').animate({
            opacity: [0.3, 0.1],

        }, {
            delay: 1660,
            duration: 250,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_3Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_3').animate({
            opacity: [0.1, 0.1],

        }, {
            delay: 1910,
            duration: 1520,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_3Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_3').animate({
            opacity: [0.1, 0],
            width: ['151px', '1px'],

        }, {
            delay: 3430,
            duration: 220,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_3Animation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_3').animate({
            width: ['1px', '151px'],

        }, {
            delay: 3650,
            duration: 2550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_6Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_6').animate({
            height: ['6px', '0.75px'],
            left: ['-53.95px', '-57.45px'],
            top: ['52.24px', '49.62px'],
            opacity: [1, 0],
            width: ['8px', '1px'],

        }, {
            delay: 1820,
            duration: 150,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_6Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_6').animate({
            height: ['0.75px', '6px'],
            left: ['-57.45px', '-53.95px'],
            top: ['49.62px', '52.24px'],
            width: ['1px', '8px'],

        }, {
            delay: 1970,
            duration: 4230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 330,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 560,
            duration: 250,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 810,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 1040,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 1270,
            duration: 250,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation5() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 1520,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation6() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 0],

        }, {
            delay: 1750,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation7() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            top: ['71px', '46.97px'],

        }, {
            delay: 1850,
            duration: 90,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation8() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            top: ['46.97px', '47px'],

        }, {
            delay: 1940,
            duration: 1640,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation9() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 1980,
            duration: 270,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation10() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 2250,
            duration: 280,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation11() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 2530,
            duration: 270,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation12() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 2800,
            duration: 270,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation13() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 3070,
            duration: 260,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation14() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 3330,
            duration: 250,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_4Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_4').animate({
            opacity: [0.3, 0],
            width: ['61px', '1px'],

        }, {
            delay: 3530,
            duration: 190,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_4Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_4').animate({
            width: ['1px', '61px'],

        }, {
            delay: 3720,
            duration: 2480,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_7Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_7').animate({
            top: ['27.24px', '24.62px'],
            opacity: [1, 0],
            width: ['8px', '1px'],
            height: ['6px', '0.75px'],
            left: ['-53.95px', '-57.45px'],

        }, {
            delay: 3630,
            duration: 120,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_7Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_7').animate({
            top: ['24.62px', '27.24px'],
            width: ['1px', '8px'],
            height: ['0.75px', '6px'],
            left: ['-57.45px', '-53.95px'],

        }, {
            delay: 3750,
            duration: 2440,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_3Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_3').animate({
            opacity: [0.4, 0],
            width: ['61px', '1px'],

        }, {
            delay: 3550,
            duration: 310,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_3Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_3').animate({
            width: ['1px', '61px'],

        }, {
            delay: 3860,
            duration: 2340,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_liveAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_live').animate({
            opacity: [0, 1],

        }, {
            delay: 6000,
            duration: 200,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_inline_editingAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_inline_editing').animate({
            opacity: [0, 1],

        }, {
            delay: 4810,
            duration: 180,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_inline_editingAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_inline_editing').animate({
            opacity: [1, 1],

        }, {
            delay: 4990,
            duration: 860,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_inline_editingAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_inline_editing').animate({
            opacity: [1, 0],

        }, {
            delay: 5850,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_live_previewAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_live_preview').animate({
            opacity: [0, 1],

        }, {
            delay: 3880,
            duration: 220,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_live_previewAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_live_preview').animate({
            opacity: [1, 1],

        }, {
            delay: 4100,
            duration: 520,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_live_previewAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_live_preview').animate({
            opacity: [1, 0],

        }, {
            delay: 4620,
            duration: 90,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_rebuildingAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_rebuilding').animate({
            opacity: [1, 0],

        }, {
            delay: 3750,
            duration: 110,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [1, 0],

        }, {
            delay: 400,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [0, 1],

        }, {
            delay: 800,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [1, 0],

        }, {
            delay: 1200,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [0, 1],

        }, {
            delay: 1600,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [1, 0],

        }, {
            delay: 2000,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation5() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [0, 1],

        }, {
            delay: 2400,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation6() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [1, 0],

        }, {
            delay: 2800,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation7() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [0, 1],

        }, {
            delay: 3200,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation8() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [1, 1],

        }, {
            delay: 3600,
            duration: 1110,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation9() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [1, 0],

        }, {
            delay: 4710,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation10() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [0, 0],

        }, {
            delay: 4810,
            duration: 1200,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation11() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [0, 1],

        }, {
            delay: 6010,
            duration: 190,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 400,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 800,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 1200,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 1600,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 2000,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation5() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 2400,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation6() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 2800,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation7() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 3200,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation8() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 3600,
            duration: 1110,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation9() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({
            fill: ['#FFA15D', '#35FDA2'],

        }, {
            delay: 3910,
            duration: 210,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation10() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({
            fill: ['#35FDA2', '#35FDA2'],

        }, {
            delay: 4120,
            duration: 2080,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation11() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 4710,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation12() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 4810,
            duration: 1200,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation13() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 6010,
            duration: 190,
            easing: 'ease-in-out',
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
            this.widgetAnimation0(),
            this.widgetAnimation1(),
            this.widgetAnimation2(),
            this.widgetAnimation3(),
            this.widgetAnimation4(),
            this.header_bgShapeAnimation0(),
            this.header_bgShapeAnimation1(),
            this.header_bgShapeAnimation2(),
            this.header_bgShapeAnimation3(),
            this.header_bgShapeAnimation4(),
            this.card_bgAnimation0(),
            this.card_bgAnimation1(),
            this.card_bgAnimation2(),
            this.card_bgAnimation3(),
            this.card_bgAnimation4(),
            this.arrow_smallShapeAnimation0(),
            this.arrow_smallShapeAnimation1(),
            this.arrow_smallShapeAnimation2(),
            this.arrow_smallShapeAnimation3(),
            this.arrow_smallShapeAnimation4(),
            this.arrow_bigShapeAnimation0(),
            this.arrow_bigShapeAnimation1(),
            this.arrow_bigShapeAnimation2(),
            this.arrow_bigShapeAnimation3(),
            this.arrow_bigShapeAnimation4(),
            this.btn_edit_pageAnimation0(),
            this.text_line_mockAnimation0(),
            this.icon_v_in_circleAnimation0(),
            this.text_fieldAnimation0(),
            this.text_field_single_line_baseAnimation0(),
            this.text_field_single_line_baseAnimation1(),
            this.text_field_single_line_baseAnimation2(),
            this.rectangleAnimation0(),
            this.rectangleAnimation1(),
            this.rectangleAnimation2(),
            this.rectangle_1Animation0(),
            this.rectangle_1Animation1(),
            this.rectangle_1Animation2(),
            this.contentful_avatarAnimation0(),
            this.contentful_avatarAnimation1(),
            this.contentful_avatarAnimation2(),
            this.contentfulAnimation0(),
            this.pathAnimation0(),
            this.path_1Animation0(),
            this.path_2Animation0(),
            this.path_3Animation0(),
            this.path_4Animation0(),
            this.shapeAnimation0(),
            this.shapeAnimation1(),
            this.shapeAnimation2(),
            this.text_line_mock_1Animation0(),
            this.text_line_mock_1Animation1(),
            this.text_line_mock_1Animation2(),
            this.text_line_mock2Animation0(),
            this.text_line_mock2Animation1(),
            this.text_line_mock2Animation2(),
            this.text_line_mock_2Animation0(),
            this.text_line_mock_2Animation1(),
            this.text_line_mock_2Animation2(),
            this.btn_publishAnimation0(),
            this.btn_publishAnimation1(),
            this.btn_publishAnimation2(),
            this.btn_view_logAnimation0(),
            this.btn_refreshAnimation0(),
            this.btn_refreshAnimation1(),
            this.btn_refreshAnimation2(),
            this.rectangle_2Animation0(),
            this.rectangle_2Animation1(),
            this.rectangle_2Animation2(),
            this.rectangle_2Animation3(),
            this.path_5Animation0(),
            this.path_5Animation1(),
            this.rectangle_3Animation0(),
            this.rectangle_3Animation1(),
            this.rectangle_3Animation2(),
            this.rectangle_3Animation3(),
            this.path_6Animation0(),
            this.path_6Animation1(),
            this.status_indicator_pendingAnimation0(),
            this.status_indicator_pendingAnimation1(),
            this.status_indicator_pendingAnimation2(),
            this.status_indicator_pendingAnimation3(),
            this.status_indicator_pendingAnimation4(),
            this.status_indicator_pendingAnimation5(),
            this.status_indicator_pendingAnimation6(),
            this.status_indicator_pendingAnimation7(),
            this.status_indicator_pendingAnimation8(),
            this.status_indicator_pendingAnimation9(),
            this.status_indicator_pendingAnimation10(),
            this.status_indicator_pendingAnimation11(),
            this.status_indicator_pendingAnimation12(),
            this.status_indicator_pendingAnimation13(),
            this.status_indicator_pendingAnimation14(),
            this.rectangle_4Animation0(),
            this.rectangle_4Animation1(),
            this.path_7Animation0(),
            this.path_7Animation1(),
            this.text_line_mock_3Animation0(),
            this.text_line_mock_3Animation1(),
            this.header_title_liveAnimation0(),
            this.header_title_inline_editingAnimation0(),
            this.header_title_inline_editingAnimation1(),
            this.header_title_inline_editingAnimation2(),
            this.header_title_live_previewAnimation0(),
            this.header_title_live_previewAnimation1(),
            this.header_title_live_previewAnimation2(),
            this.header_title_rebuildingAnimation0(),
            this.status_indicatorAnimation0(),
            this.status_indicatorAnimation1(),
            this.status_indicatorAnimation2(),
            this.status_indicatorAnimation3(),
            this.status_indicatorAnimation4(),
            this.status_indicatorAnimation5(),
            this.status_indicatorAnimation6(),
            this.status_indicatorAnimation7(),
            this.status_indicatorAnimation8(),
            this.status_indicatorAnimation9(),
            this.status_indicatorAnimation10(),
            this.status_indicatorAnimation11(),
            this.status_indicatorShapeAnimation0(),
            this.status_indicatorShapeAnimation1(),
            this.status_indicatorShapeAnimation2(),
            this.status_indicatorShapeAnimation3(),
            this.status_indicatorShapeAnimation4(),
            this.status_indicatorShapeAnimation5(),
            this.status_indicatorShapeAnimation6(),
            this.status_indicatorShapeAnimation7(),
            this.status_indicatorShapeAnimation8(),
            this.status_indicatorShapeAnimation9(),
            this.status_indicatorShapeAnimation10(),
            this.status_indicatorShapeAnimation11(),
            this.status_indicatorShapeAnimation12(),
            this.status_indicatorShapeAnimation13(),
        ]
    }
}

Object.freeze(WidgetMockAnimationReverseTimeline)
