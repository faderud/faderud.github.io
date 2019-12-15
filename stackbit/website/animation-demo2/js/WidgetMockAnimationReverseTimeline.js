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
    get duration() { return 2100 }

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
        path = this.rootElement.getElementById("card_bg-path")
        path.d = "M0,217c0,0,340,0,340,0 0,0,0,-217,0,-217 0,0,-340,0,-340,0 0,0,0,217,0,217zM0,217"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("widget_base-path")
        path.d = "M0,482.63c0,0,360,0,360,0 0,0,0,-482.63,0,-482.63 0,0,-360,0,-360,0 0,0,0,482.63,0,482.63zM0,482.63"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("header_bg-path")
        path.d = "M360,0c0,-0,0,124,0,124 -47.577,19.8,-104.046,29.799,-169.407,29.997 0,0,-1.983,0.003,-1.983,0.003 -66.203,0,-129.073,6.667,-188.609,20 0,0,0,-174,0,-174 0,0,360,0,360,0zM360,0"
        path.innerHTML = `

<animate
  attributeName="fill"
  values="#6E6EE8;#F6823F;#0ACA73;#41A7FC"
  dur="2.1s"
  fill="freeze"
  calcMode="spline"
  keyTimes="0;0.333333;0.666667;1"
  keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
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
        ]
    }

    artboardAnimation() {
        // Workaround for Safari bug
        return this.rootElement.querySelector('#WidgetMockAnimation.flow-artboard').animate({
        backgroundPosition: ['0px', '1px'],
        }, {
            delay: 0,
            duration: 2100,
        });
    }
    widgetAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['351px', '224px'],

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
            height: ['224px', '308px'],

        }, {
            delay: 700,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    widgetAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget').animate({
            height: ['308px', '206px'],

        }, {
            delay: 1400,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    widget_baseAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .widget_base').animate({
            height: ['482.63px', '308px'],

        }, {
            delay: 0,
            duration: 2100,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation0() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#6E6EE8', '#F6823F'],

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
            fill: ['#F6823F', '#0ACA73'],

        }, {
            delay: 700,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    header_bgShapeAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .header_bg-svg').animate({
            fill: ['#0ACA73', '#41A7FC'],

        }, {
            delay: 1400,
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
            delay: 0,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation1() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['91px', '175px'],

        }, {
            delay: 700,
            duration: 700,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    card_bgAnimation2() {
        return this.rootElement.querySelector('#WidgetMockAnimation .card_bg').animate({
            height: ['175px', '74px'],

        }, {
            delay: 1400,
            duration: 700,
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
            this.widget_baseAnimation0(),
            this.header_bgShapeAnimation0(),
            this.header_bgShapeAnimation1(),
            this.header_bgShapeAnimation2(),
            this.card_bgAnimation0(),
            this.card_bgAnimation1(),
            this.card_bgAnimation2(),
        ]
    }
}

Object.freeze(WidgetMockAnimationReverseTimeline)
