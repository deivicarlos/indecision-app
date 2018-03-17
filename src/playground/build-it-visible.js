
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            };
        });

    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <p>Here are some details</p>
                )}
            </div>
        );
    }
};


ReactDOM.render(<VisibilityToggle />, document.getElementById('App'));



// const appRoot = document.getElementById('App');
// let flag = true;


// const onShowDetails = () => {
    
//     flag = !flag;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetails}>{ flag  ? 'Show details' : 'Hide details'}</button>
//             {!flag ? <p>Here are some details</p> : ''}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };



// render();
