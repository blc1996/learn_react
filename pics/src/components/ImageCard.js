import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state={ span: 0 };
    }

    componentDidMount () {
        //traditional js eventlistener
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const time = Math.ceil(this.imageRef.current.clientHeight/10 + 1);
        this.setState({span: time});
        console.log(this.state.span);
    }

    render () {
        const {description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.span}` }}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;