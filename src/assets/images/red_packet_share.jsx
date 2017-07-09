//= require ./mixins/use_update
define('Components/RedPacketShare',function(require){
  const {pageDown, activeTab, researchGame, changeFocus, getPublishers, searchByUrl,syncSearchTags} = require('Actions/SearchAction');
  const {connect} = ReactRedux;
  const {Container, Grid,List} = require('Components/AMUITouch');
  var SpinnerLoadingBar = React.createClass({
    componentWillMount:function(){
       this.props.dispatch(getPublishers());
      this.props.dispatch(syncSearchTags());
      this.props.dispatch(searchByUrl(this.props.location.search));
    },
    getRedPacketButton(){

    },

    getSharedList(){

    },

    render: function(){
      return (
        <div className="img-loading"/>
        
      );
    }
  });

  function select(state) {
    return {
      
    };
  }
  var temp = connect(null, routerActions)(SearchResult)
  return connect(select)(temp);
});