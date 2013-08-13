document.addEventListener( "DOMContentLoaded", function () {
      popcorn = Popcorn( "#video" )
      .volume( 0 )
    .processing({
        start: 15,
        end: 20,
        target: "processing-div",
        sketch: "original1.pjs",
        noPause: true
      })     
      .footnote({
        start: 1, // seconds
        end: 5, // seconds
        text: 'John Resig started the processing.js project in 2008',
        target: 'footnotediv'
      } )
      .footnote({
        start: 5, // seconds
        end: 10, // seconds
        text: 'He proved that it was possible to translate Processing to JavaScript',
        target: 'footnotediv'
      } )
      .footnote({
        start: 10, // seconds
        end: 15, // seconds
        text: 'This version was capable of rendering 2D sketches found on the Processing Site',
        target: 'footnotediv'
      } )

     .footnote({
        start: 15, // seconds
        end: 30, // seconds
        text: 'Original Processing Sketch by Ben Fry and Casey Reas',
        target: 'footnotediv'
      } )
    .processing({
        start: 20,
        end: 25,
        target: "processing-div",
        sketch: "original2.pjs",
        noPause: true
      })
    .processing({
        start: 25,
        end: 30,
        target: "processing-div",
        sketch: "original3.pjs",
        noPause: true
      })
    .processing({
        start: 30,
        end: 35,
        target: "processing-div",
        sketch: "original4.pjs",
        noPause: true
      })
     .footnote({
        start: 30, // seconds
        end: 35, // seconds
        text: 'Original Processing Sketch by Ira Greenburg',
        target: 'footnotediv'
      } )
      .footnote({
        start: 35, // seconds
        end: 40, // seconds
        text: 'Code was released as an open source project',
        target: 'footnotediv'
      } )
      .footnote({
        start: 40, // seconds
        end: 55, // seconds
        text: 'Time passes...',
        target: 'footnotediv'
      } )
      .footnote({
        start: 55, // seconds
        end: 65, // seconds
        text: 'Fall 2009, Students from Seneca College under the supervision of David Humphrey take on the task to bring Processing.js to parity with Processing',
        target: 'footnotediv'
      } )
      .footnote({
        start: 65, // seconds
        end: 70, // seconds
        text: 'Other volunteers also join to see this work to completion',
        target: 'footnotediv'
      } )
      .processing({
        start: 70,
        end: 75,
        target: "processing-div",
        sketch: "pvector.pjs",
        noPause: true
      })
     .footnote({
        start: 70, // seconds
        end: 75, // seconds
        text: 'functionality was enhanced',
        target: 'footnotediv'
      } )
      
      .processing({
        start: 75,
        end: 82,
        target: "processing-div",
        sketch: "rect.pjs",
        noPause: true
      })
     .footnote({
        start: 75, // seconds
        end: 82, // seconds
        text: 'bugs were fixed',
        target: 'footnotediv'
      } )

      .processing({
        start: 82,
        end: 87,
        target: "processing-div",
        sketch: "triangle.pjs",
        noPause: false
      })


     .processing({
        start: 87,
        end: 100,
        target: "processing-div",
        sketch: "blend.pjs",
        noPause: true
      })
     .footnote({
        start: 87, // seconds
        end: 100, // seconds
        text: 'Efficiency was increased',
        target: 'footnotediv'
      } )


     .footnote({
        start: 100, // seconds
        end: 105, // seconds
        text: 'All the 3D functionality was implemented at this time',
        target: 'footnotediv'
      } )

     .processing({
        start: 105,
        end: 115,
        target: "processing-div",
        sketch: "bird.pjs",
        noPause: true
      })



      .processing({
        start: 115,
        end: 125,
        target: "processing-div",
        sketch: "sphere.pjs",
        noPause: true
      })

      
     .processing({
        start: 125,
        end: 135,
        target: "processing-div",
        sketch: "corkscrew.pjs",
        noPause: true
      })

      .footnote({
        start: 135, // seconds
        end: 145, // seconds
        text: 'Work continues on Processing.js to improve performance and maintain parity with Processing',
        target: 'footnotediv'
      } )      
      ;

    }, false);
