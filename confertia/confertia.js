var results = []; // build the list of results as we answer questions

var Question = React.createClass({
    getInitialState: function () {
        return { chosen: [] }; // keep track of selections with an array
    },
    setResponse: function (i) {
        var chosen = this.state.chosen;
        var idx = chosen.indexOf(i);
        if (idx !== -1) { // if response is chosen,
            chosen.splice(idx,1); // remove from list of selected choices
        } else {
            chosen.push(i); // otherwise add to the list of selected choices
        }
        this.setState({ chosen:chosen });
    },
    componentDidUpdate: function () { // after updating the selected choices
        var q = this.props.question;
        if (this.state.chosen.length >= q.answers.length) { // if the number of answers is met, 
            var correct = true; 
            for (var choice of this.state.chosen) { // check if the choices are correct
                if (q.answers.indexOf(choice) !== -1) {
                    correct = false;
                }
            }
            if (!correct) { // if not correct, 
                results.push(q.response); // add to the list of responses
            }
            var component = this;
            setTimeout(function () {
                component.props.nextSlide(); // then advance the slide
            },250);
        }
    },
    render: function () {
        var q = this.props.question;
        var choices = q.choices.map(function (txt,i) {
            return ( // evaluate if the choice was selected
                <div className={'choice '+(this.state.chosen.indexOf(i)>-1?'chosen':'')} onClick={this.setResponse.bind(null,i)} key={i}>
                    <label>{txt}</label>
                    <br/>
                </div>
            );
        },this);
        return (
            <div className='question'>
                <h2>QUESTION</h2>
                <h3>{q.question}</h3>
                <h2>CHOICES (Select {q.answers.length})</h2>
                <div className='choices'>{choices}</div>
            </div>
        );
    }
});

var Main = React.createClass({
    getInitialState: function () {
        return { slide: 0 };
    },
    gotoSlide: function (num) {
        this.setState({ slide: num });
    },
    render: function () {
        var i = this.state.slide;
        return i === 0 ? (
            <div className='load'>
                <img src='confertia.png' onClick={this.gotoSlide.bind(null,i+1)} />
            </div>
        ) : i < questions.length ? (
            <Question num={i} question={questions[i-1]} nextSlide={this.gotoSlide.bind(null,i+1)} key={i} /> 
        ) : ( 
            <div className='end'>
                <h2>AWESOME</h2>
                <h3>Here's what you should ask your doctor:</h3>
                <div className='choices'>
                    {results.map(function (result,j) { return <p className='choice' key={j}>{result}</p>; },this)}
                </div>
            </div>
        );
    }
});
ReactDOM.render( <Main />, document.getElementById('render'));