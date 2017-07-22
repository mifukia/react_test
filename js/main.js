const data = [
    {
        id: 1,
        firstname: 'トム',
        text: '__クルーズ__',
    },
    {
        id: 2,
        firstname: 'ケビン',
        text: '*コスナー*',
    }
];
const CommentBox = React.createClass({
    render : function(){
        return (
            <div className="CommentBox">
                <h1>コメント</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    },
});

const CommentList = React.createClass({
    render : function(){
        const commentNodes = this.props.data.map(function(comment){
            return (
                <Comment firstname={comment.firstname} key={comment.id}>
                {comment.text}
                </Comment>
            );
        });
        return(
            <div className="CommentList">
                {commentNodes}
            </div>
        )
    },
});

const Comment = React.createClass({
    rawMarkup: function(){
        var markDown=new Remarkable();
        var rawMarkup = markDown.render(this.props.children);
        return {__html:rawMarkup};
    },
    render : function(){
        return(
            <div className="Comment">
                <h2>{this.props.firstname}</h2>
                <span dangerouslySetInnerHTML= {this.rawMarkup()}/>
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
    <CommentBox data={data}/>,
    document.getElementById('content_1')
);


