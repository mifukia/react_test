const CommentBox = React.createClass({
    render : function(){
        return (
            <div className="CommentBox">
                <h1>コメント</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    },
});

const CommentList = React.createClass({
    render : function(){
        return(
            <div className="CommentList">
                <Comment firstname="トム">クルーズ</Comment>
                <Comment firstname="ケビン">コスナー</Comment>
            </div>
        )
    },
});

const Comment = React.createClass({
    render : function(){
        return(
            <div className="Comment">
                <h2>{this.props.firstname}</h2>
                {this.props.children}
            </div>
        )
    },
});

const CommentForm = React.createClass({
    render : function(){
        return(
            <div className="CommentForm">
                CommentFormを表示
            </div>
        )
    },
});

ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content_1')
);


