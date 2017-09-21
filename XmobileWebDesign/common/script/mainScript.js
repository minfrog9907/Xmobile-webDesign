var bar = new ProgressBar.Circle(container, {
   color: '#73F1E2',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#73F1E2', width:1 },
    to: { color: '#73F1E2', width:4 },
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
        
        var vlue = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }
    }
});
//bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
//bar.text.style.fontSize = '2rem';

bar.animate(1.0);