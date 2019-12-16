/**
* Class representing the WidgetMockAnimationTimeline timeline.
*
* Made with Flow
*/

class WidgetMockAnimationTimeline {
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
  values="#41A7FC;#0ACA73;#0ACA73;#F6823F;#F6823F;#6E6EE8;#6E6EE8"
  dur="6.2s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.112903;0.201613;0.277419;0.340323;0.448387;1"
  keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
/>`
         
        path = this.rootElement.getElementById("card_bg-path")
        path.d = "M0,74c0,0,340,0,340,0 0,0,0,-74,0,-74 0,0,-340,0,-340,0 0,0,0,74,0,74zM0,74"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("status_indicator-path")
        path.d = "M-0,4c-0,-2.194,1.806,-4,4,-4 0,0,0,0,0,0 2.194,0,4,1.806,4,4 0,0,0,0,0,0 0,2.194,-1.806,4,-4,4 -0,0,-0,0,-0,0 0,0,-0,0,-0,0 -2.194,-0,-4,-1.806,-4,-4 0,0,0,-0,0,-0zM-0,4"
        path.innerHTML = `

<animate
  attributeName="fill"
  values="#35FDA2;#35FDA2;#FFA15D;#FFA15D"
  dur="6.2s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.335484;0.369355;1"
  keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
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
        path.d = "M0,0c0,0,1,0,1,0 0,0,0,7,0,7 0,0,-1,0,-1,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_line_mock_2-path")
        path.d = "M0,0c0,0,0.01,0,0.01,0 0,0,0,7,0,7 0,0,-0.01,0,-0.01,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("primary_btn_bg_1-path")
        path.d = "M0,16c-0,-8.777,7.223,-16,16,-16 0,0,46,0,46,0 8.777,0,16,7.223,16,16 0,0,0,0,0,0 0,8.777,-7.223,16,-16,16 0,0,-46,-0,-46,-0 -8.777,0,-16,-7.223,-16,-16 0,0,0,-0,0,-0zM0,16"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_1-path")
        path.d = "M0,0c0,0,0.01,0,0.01,0 0,0,0,7,0,7 0,0,-0.01,0,-0.01,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("shape-path")
        path.d = "M0.273,0c0.025,0,0.045,0.02,0.045,0.045 0,0.022,-0.016,0.041,-0.037,0.045 0,0,-0.008,0.001,-0.008,0.001 0,0,-0.091,0,-0.091,0 -0.047,0,-0.085,0.035,-0.09,0.08 0,0,-0.001,0.011,-0.001,0.011 0,0,0,0.636,0,0.636 0,0.047,0.035,0.085,0.08,0.09 0,0,0.011,0.001,0.011,0.001 0,0,0.636,0,0.636,0 0.047,0,0.085,-0.035,0.09,-0.08 0,0,0.001,-0.011,0.001,-0.011 0,0,0,-0.045,0,-0.045 0,0,0.001,-0.008,0.001,-0.008 0.004,-0.021,0.022,-0.037,0.045,-0.037 0.022,0,0.041,0.016,0.045,0.037 0,0,0.001,0.008,0.001,0.008 0,0,0,0.045,0,0.045 0,0.1,-0.081,0.182,-0.182,0.182 0,0,-0.636,0,-0.636,0 -0.1,0,-0.182,-0.081,-0.182,-0.182 0,0,0,-0.636,0,-0.636 0,-0.1,0.081,-0.182,0.182,-0.182 0,0,0.091,0,0.091,0zM0.818,0c0.1,0,0.182,0.081,0.182,0.182 0,0,0,0.364,0,0.364 0,0.05,-0.041,0.091,-0.091,0.091 -0.05,0,-0.091,-0.041,-0.091,-0.091 0,0,0,-0.235,0,-0.235 0,0,-0.31,0.31,-0.31,0.31 -0.035,0.035,-0.093,0.035,-0.129,0 -0.035,-0.035,-0.035,-0.093,0,-0.129 0,0,0.31,-0.31,0.31,-0.31 0,0,-0.235,0,-0.235,0 -0.05,0,-0.091,-0.041,-0.091,-0.091 0,-0.05,0.041,-0.091,0.091,-0.091 0,0,0.364,0,0.364,0zM0.818,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_line_mock_1-path")
        path.d = "M0,0c0,0,0.01,0,0.01,0 0,0,0,7,0,7 0,0,-0.01,0,-0.01,0 0,0,0,-7,0,-7zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path-path")
        path.d = "M0.345,0.657c-0.061,-0.056,-0.096,-0.134,-0.096,-0.222 0,-0.088,0.036,-0.166,0.093,-0.222 0.05,-0.049,0.05,-0.127,0,-0.176 -0.05,-0.049,-0.128,-0.049,-0.178,0 -0.1,0.102,-0.164,0.243,-0.164,0.398 0,0.155,0.064,0.296,0.167,0.398 0.05,0.049,0.128,0.049,0.178,0 0.046,-0.049,0.046,-0.127,0,-0.176zM0.345,0.657"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_1-path")
        path.d = "M0.213,0.345c0.056,-0.061,0.134,-0.096,0.222,-0.096 0.088,0,0.166,0.036,0.222,0.093 0.049,0.05,0.127,0.05,0.176,0 0.049,-0.05,0.049,-0.128,0,-0.178 -0.102,-0.1,-0.243,-0.164,-0.398,-0.164 -0.155,0,-0.296,0.064,-0.398,0.167 -0.049,0.05,-0.049,0.128,0,0.178 0.049,0.046,0.127,0.046,0.176,0zM0.213,0.345"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_2-path")
        path.d = "M0.657,0.035c-0.056,0.061,-0.134,0.096,-0.222,0.096 -0.088,0,-0.166,-0.036,-0.222,-0.093 -0.049,-0.05,-0.127,-0.05,-0.176,0 -0.049,0.05,-0.049,0.128,0,0.178 0.102,0.1,0.243,0.164,0.398,0.164 0.155,0,0.296,-0.064,0.398,-0.167 0.049,-0.05,0.049,-0.128,0,-0.178 -0.049,-0.046,-0.127,-0.046,-0.176,0zM0.657,0.035"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_3-path")
        path.d = "M0.125,0.25c0.069,0,0.125,-0.056,0.125,-0.125 0,-0.069,-0.056,-0.125,-0.125,-0.125 -0.069,0,-0.125,0.056,-0.125,0.125 0,0.069,0.056,0.125,0.125,0.125zM0.125,0.25"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("path_4-path")
        path.d = "M0.125,0.25c0.069,0,0.125,-0.056,0.125,-0.125 0,-0.069,-0.056,-0.125,-0.125,-0.125 -0.069,0,-0.125,0.056,-0.125,0.125 0,0.069,0.056,0.125,0.125,0.125zM0.125,0.25"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("text_field_single_line_base-path")
        path.d = "M0,2c-0,-1.097,0.903,-2,2,-2 0,0,276,0,276,0 1.097,0,2,0.903,2,2 0,0,0,31,0,31 0,1.097,-0.903,2,-2,2 0,0,-276,0,-276,0 -1.097,0,-2,-0.903,-2,-2 0,0,0,0,0,0 0,0,0,-31,0,-31zM0,2"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle-path")
        path.d = "M0,0c0,0,1,0,1,0 0,0,0,7,0,7 0,0,-1,0,-1,0 0,0,0,-7,0,-7zM0,0"
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
  values="#41A8FC;#0BCA73;#0BCA73;#F68240;#F68240;#6E6EE8;#6E6EE8"
  dur="6.2s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.112903;0.201613;0.277419;0.340323;0.448387;1"
  keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
/>`
         
        path = this.rootElement.getElementById("arrow_big-path")
        path.d = "M9.244,0c0.288,0,0.551,0.11,0.749,0.29 0,0,0.013,0.014,0.013,0.014 0.227,0.206,0.369,0.505,0.369,0.837 0,0.057,-0.004,0.112,-0.012,0.167 0,0,-0.001,8.025,-0.001,8.025 0,0.623,-0.5,1.128,-1.118,1.128 -0.617,0,-1.118,-0.505,-1.118,-1.128 0,0,-0,-7.064,-0,-7.064 0,0,-7.003,0,-7.003,0 -0.576,0,-1.051,-0.44,-1.111,-1.005 0,0,-0.007,-0.123,-0.007,-0.123 0,-0.623,0.5,-1.128,1.118,-1.128 0,0,7.956,-0.001,7.956,-0.001 0.054,-0.008,0.109,-0.012,0.165,-0.012zM9.244,0"
        path.innerHTML = `

<animate
  attributeName="fill"
  values="#41A8FC;#0BCA73;#0BCA73;#F68240;#F68240;#6E6EE8;#6E6EE8"
  dur="6.2s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.112903;0.201613;0.277419;0.340323;0.448387;1"
  keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
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
            height: ['206px', '308px'],

        }, {
            delay: 0,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    widgetAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['308px', '308px'],

        }, {
            delay: 700,
            duration: 550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    widgetAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['308px', '224px'],

        }, {
            delay: 1250,
            duration: 470,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    widgetAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['224px', '224px'],

        }, {
            delay: 1720,
            duration: 390,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    widgetAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['224px', '351px'],

        }, {
            delay: 2110,
            duration: 670,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#41A7FC', '#0ACA73'],

        }, {
            delay: 0,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#0ACA73', '#0ACA73'],

        }, {
            delay: 700,
            duration: 550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#0ACA73', '#F6823F'],

        }, {
            delay: 1250,
            duration: 470,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#F6823F', '#F6823F'],

        }, {
            delay: 1720,
            duration: 390,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#F6823F', '#6E6EE8'],

        }, {
            delay: 2110,
            duration: 670,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['74px', '175px'],

        }, {
            delay: 0,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['175px', '175px'],

        }, {
            delay: 700,
            duration: 550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['175px', '91px'],

        }, {
            delay: 1250,
            duration: 470,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['91px', '91px'],

        }, {
            delay: 1720,
            duration: 390,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['91px', '217px'],

        }, {
            delay: 2110,
            duration: 670,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_small-svg').animate({
            fill: ['#41A8FC', '#0BCA73'],

        }, {
            delay: 0,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_small-svg').animate({
            fill: ['#0BCA73', '#0BCA73'],

        }, {
            delay: 700,
            duration: 550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_small-svg').animate({
            fill: ['#0BCA73', '#F68240'],

        }, {
            delay: 1250,
            duration: 470,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_small-svg').animate({
            fill: ['#F68240', '#F68240'],

        }, {
            delay: 1720,
            duration: 390,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_smallShapeAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_small-svg').animate({
            fill: ['#F68240', '#6E6EE8'],

        }, {
            delay: 2110,
            duration: 670,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_big-svg').animate({
            fill: ['#41A8FC', '#0BCA73'],

        }, {
            delay: 0,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_big-svg').animate({
            fill: ['#0BCA73', '#0BCA73'],

        }, {
            delay: 700,
            duration: 550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_big-svg').animate({
            fill: ['#0BCA73', '#F68240'],

        }, {
            delay: 1250,
            duration: 470,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_big-svg').animate({
            fill: ['#F68240', '#F68240'],

        }, {
            delay: 1720,
            duration: 390,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    arrow_bigShapeAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .arrow_big-svg').animate({
            fill: ['#F68240', '#6E6EE8'],

        }, {
            delay: 2110,
            duration: 670,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_edit_pageAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_edit_page').animate({
            opacity: [1, 0],

        }, {
            delay: 190,
            duration: 310,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mockAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock').animate({
            opacity: [0.4, 0],

        }, {
            delay: 0,
            duration: 320,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    icon_v_in_circleAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .icon_v_in_circle').animate({
            opacity: [1, 0],

        }, {
            delay: 90,
            duration: 300,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_fieldAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_field').animate({
            opacity: [0.95, 1],

        }, {
            delay: 710,
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
            delay: 710,
            duration: 380,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_field_single_line_baseAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_field_single_line_base').animate({
            opacity: [1, 1],

        }, {
            delay: 1090,
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
            delay: 1220,
            duration: 140,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangleAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle').animate({
            opacity: [0, 0.3],

        }, {
            delay: 0,
            duration: 1200,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangleAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle').animate({
            width: ['1px', '203px'],

        }, {
            delay: 660,
            duration: 430,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangleAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle').animate({
            opacity: [0.3, 0],

        }, {
            delay: 1200,
            duration: 130,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_1Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_1').animate({
            opacity: [0, 0.3],

        }, {
            delay: 0,
            duration: 1240,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_1Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_1').animate({
            width: ['0.01px', '71px'],

        }, {
            delay: 610,
            duration: 370,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_1Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_1').animate({
            opacity: [0.3, 0],

        }, {
            delay: 1240,
            duration: 160,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    contentful_avatarAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .contentful_avatar').animate({
            opacity: [0, 1],
            height: ['1.15px', '15px'],
            width: ['1px', '13px'],

        }, {
            delay: 660,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    contentful_avatarAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .contentful_avatar').animate({
            opacity: [1, 1],

        }, {
            delay: 760,
            duration: 510,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    contentful_avatarAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .contentful_avatar').animate({
            opacity: [1, 0],

        }, {
            delay: 1270,
            duration: 80,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    contentfulAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .contentful').animate({
            width: ['1px', '13px'],
            top: ['0.58px', '7.5px'],
            height: ['1.15px', '15px'],
            left: ['0.5px', '6.5px'],

        }, {
            delay: 660,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    pathAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path').animate({
            width: ['0.38px', '4.9px'],
            top: ['0.58px', '7.54px'],
            left: ['0.19px', '2.45px'],
            height: ['0.87px', '11.34px'],

        }, {
            delay: 660,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_1Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_1').animate({
            height: ['0.38px', '4.9px'],
            top: ['0.2px', '2.64px'],
            width: ['0.87px', '11.33px'],
            left: ['0.56px', '7.34px'],

        }, {
            delay: 660,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_2Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_2').animate({
            left: ['0.56px', '7.34px'],
            height: ['0.38px', '4.9px'],
            width: ['0.87px', '11.33px'],
            top: ['0.95px', '12.44px'],

        }, {
            delay: 660,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_3Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_3').animate({
            height: ['0.25px', '3.21px'],
            top: ['0.27px', '3.5px'],
            left: ['0.25px', '3.3px'],
            width: ['0.25px', '3.21px'],

        }, {
            delay: 660,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_4Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_4').animate({
            top: ['0.89px', '11.58px'],
            width: ['0.25px', '3.21px'],
            height: ['0.25px', '3.21px'],
            left: ['0.25px', '3.3px'],

        }, {
            delay: 660,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    shapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .shape').animate({
            height: ['1px', '11px'],
            width: ['1px', '11px'],
            opacity: [0, 1],

        }, {
            delay: 720,
            duration: 150,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    shapeAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .shape').animate({
            opacity: [1, 1],

        }, {
            delay: 870,
            duration: 380,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    shapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .shape').animate({
            opacity: [1, 0],

        }, {
            delay: 1250,
            duration: 70,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_1Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_1').animate({
            width: ['0.01px', '61px'],
            opacity: [0, 0.4],

        }, {
            delay: 460,
            duration: 280,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_1Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_1').animate({
            opacity: [0.4, 0.4],

        }, {
            delay: 740,
            duration: 560,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_1Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_1').animate({
            opacity: [0.4, 0],

        }, {
            delay: 1300,
            duration: 140,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock2Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock2').animate({
            width: ['1px', '147px'],
            opacity: [0, 0.3],

        }, {
            delay: 1500,
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
            delay: 1660,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock2Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock2').animate({
            opacity: [0.3, 0],

        }, {
            delay: 1890,
            duration: 160,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_2Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_2').animate({
            opacity: [0, 0.4],
            width: ['0.01px', '95px'],

        }, {
            delay: 1430,
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
            delay: 1580,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_2Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_2').animate({
            opacity: [0.4, 0],

        }, {
            delay: 1980,
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
            delay: 1630,
            duration: 130,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_publishAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_publish').animate({
            opacity: [1, 1],

        }, {
            delay: 1760,
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
            delay: 2050,
            duration: 140,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_view_logAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_view_log').animate({
            opacity: [0, 1],

        }, {
            delay: 2690,
            duration: 210,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_refreshAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_refresh').animate({
            opacity: [0, 0.2],

        }, {
            delay: 2740,
            duration: 210,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_refreshAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_refresh').animate({
            opacity: [0.2, 0.2],

        }, {
            delay: 2950,
            duration: 3010,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    btn_refreshAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .btn_refresh').animate({
            opacity: [0.2, 1],

        }, {
            delay: 5960,
            duration: 240,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_2Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_2').animate({
            width: ['100px', '1px'],

        }, {
            delay: 0,
            duration: 2650,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_2Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_2').animate({
            opacity: [0, 0.1],
            width: ['1px', '100px'],

        }, {
            delay: 2650,
            duration: 210,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_2Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_2').animate({
            opacity: [0.1, 0.1],

        }, {
            delay: 2860,
            duration: 3050,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_2Animation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_2').animate({
            opacity: [0.1, 0.3],

        }, {
            delay: 5910,
            duration: 160,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_5Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_5').animate({
            height: ['6px', '0.75px'],
            width: ['8px', '1px'],
            left: ['-53.95px', '-57.45px'],

        }, {
            delay: 0,
            duration: 5880,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_5Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_5').animate({
            height: ['0.75px', '6px'],
            width: ['1px', '8px'],
            opacity: [0, 1],
            left: ['-57.45px', '-53.95px'],

        }, {
            delay: 5880,
            duration: 120,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_3Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_3').animate({
            width: ['151px', '1px'],

        }, {
            delay: 0,
            duration: 2550,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_3Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_3').animate({
            opacity: [0, 0.1],
            width: ['1px', '151px'],

        }, {
            delay: 2550,
            duration: 220,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_3Animation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_3').animate({
            opacity: [0.1, 0.1],

        }, {
            delay: 2770,
            duration: 1520,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_3Animation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_3').animate({
            opacity: [0.1, 0.3],

        }, {
            delay: 4290,
            duration: 250,
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
            width: ['8px', '1px'],

        }, {
            delay: 0,
            duration: 4230,
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
            opacity: [0, 1],
            width: ['1px', '8px'],

        }, {
            delay: 4230,
            duration: 150,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 2620,
            duration: 250,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            top: ['47px', '46.97px'],

        }, {
            delay: 2620,
            duration: 1640,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 2870,
            duration: 260,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 3130,
            duration: 270,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 3400,
            duration: 270,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation5() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 3670,
            duration: 280,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation6() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 3950,
            duration: 270,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation7() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 0],

        }, {
            delay: 4220,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation8() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            top: ['46.97px', '71px'],

        }, {
            delay: 4260,
            duration: 90,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation9() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 4450,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation10() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 4680,
            duration: 250,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation11() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 4930,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation12() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 5160,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation13() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [0, 1],

        }, {
            delay: 5390,
            duration: 250,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicator_pendingAnimation14() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator_pending').animate({
            opacity: [1, 0],

        }, {
            delay: 5640,
            duration: 230,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_4Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_4').animate({
            width: ['61px', '1px'],

        }, {
            delay: 0,
            duration: 2480,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    rectangle_4Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .rectangle_4').animate({
            opacity: [0, 0.3],
            width: ['1px', '61px'],

        }, {
            delay: 2480,
            duration: 190,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_7Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_7').animate({
            top: ['27.24px', '24.62px'],
            width: ['8px', '1px'],
            height: ['6px', '0.75px'],
            left: ['-53.95px', '-57.45px'],

        }, {
            delay: 10,
            duration: 2440,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    path_7Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .path_7').animate({
            top: ['24.62px', '27.24px'],
            opacity: [0, 1],
            width: ['1px', '8px'],
            height: ['0.75px', '6px'],
            left: ['-57.45px', '-53.95px'],

        }, {
            delay: 2450,
            duration: 120,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_3Animation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_3').animate({
            width: ['61px', '1px'],

        }, {
            delay: 0,
            duration: 2340,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    text_line_mock_3Animation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .text_line_mock_3').animate({
            opacity: [0, 0.4],
            width: ['1px', '61px'],

        }, {
            delay: 2340,
            duration: 310,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_liveAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_live').animate({
            opacity: [1, 0],

        }, {
            delay: 0,
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
            delay: 250,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_inline_editingAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_inline_editing').animate({
            opacity: [1, 1],

        }, {
            delay: 350,
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
            delay: 1210,
            duration: 180,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_live_previewAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_live_preview').animate({
            opacity: [0, 1],

        }, {
            delay: 1490,
            duration: 90,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_live_previewAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_live_preview').animate({
            opacity: [1, 1],

        }, {
            delay: 1580,
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
            delay: 2100,
            duration: 220,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_title_rebuildingAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_title_rebuilding').animate({
            opacity: [0, 1],

        }, {
            delay: 2340,
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
            delay: 0,
            duration: 190,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [0, 0],

        }, {
            delay: 190,
            duration: 1200,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [0, 1],

        }, {
            delay: 1390,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [1, 1],

        }, {
            delay: 1490,
            duration: 1110,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [1, 0],

        }, {
            delay: 2600,
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
            delay: 3000,
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
            delay: 3400,
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
            delay: 3800,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation8() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [1, 0],

        }, {
            delay: 4200,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation9() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [0, 1],

        }, {
            delay: 4600,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation10() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [1, 0],

        }, {
            delay: 5000,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorAnimation11() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator').animate({
            opacity: [0, 1],

        }, {
            delay: 5400,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 0,
            duration: 190,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({
            fill: ['#35FDA2', '#35FDA2'],

        }, {
            delay: 0,
            duration: 2080,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 190,
            duration: 1200,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation3() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 1390,
            duration: 100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation4() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 1490,
            duration: 1110,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation5() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({
            fill: ['#35FDA2', '#FFA15D'],

        }, {
            delay: 2080,
            duration: 210,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation6() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 2600,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation7() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 3000,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation8() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 3400,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation9() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 3800,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation10() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 4200,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation11() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 4600,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation12() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 5000,
            duration: 400,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    status_indicatorShapeAnimation13() {
        return this.rootElement.querySelector('#WidgetMockAnimation .status_indicator-svg').animate({

        }, {
            delay: 5400,
            duration: 400,
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

Object.freeze(WidgetMockAnimationTimeline)
