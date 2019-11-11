import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import user from '../img/user.png'
import { listUser } from '../action'

class UserList extends Component {

    constructor() {
        super();
        this.state={
            userListData:null
        }
        this.searchHandle = this.searchHandle.bind(this);
    }
    componentWillMount(){
        this.props.listUser();
        this.setState()
    }

    searchHandle(e){
        let currentList = [];
        let newList = [];
        this.finalList = [];
       
        if (e.target.value !== "") {
            currentList=this.props.list&&this.props.list.user?this.props.list.user:"";
            newList = currentList.filter(item => {
            const lc = item&&item.name?item.name.toLowerCase():"";
            const filter = e.target.value.toLowerCase();
            var datass=lc.includes(filter);
            if(datass){
                this.finalList.push(
                    item
                );
            }
            else{
               console.log("not matching") 
            }
       
      });
    
        }
        else{
            this.finalList=this.props.list&&this.props.list.user?this.props.list.user:"";
        }
        this.setState({userListData:this.finalList})

    }
    handleUpdate(data){
        this.props.history.push
            ({
                pathname:'/updateuser',
                state:{ detail:data }
              })
    };
    render() {
       var userData =this.state.userListData&&this.state.userListData.length!== null?this.state.userListData:(this.props.list&&this.props.list.user?this.props.list.user:"");
       

      var listData=[];
        if(userData&&userData.length>0){
            userData.forEach((object, index) => {
                listData.push(
                    <div className="row user-detail-conatiner" key={index}>
                        <div className="col-sm-1 user-id">
                        {object.id} {"."}
                        </div>
                        <div className="col-sm-2 " onClick={() => this.handleUserDetail(object)}>
                            <div className="profile-container">
                            <img  className="profile-img"src={user} />
                            </div>
                        </div>
                        <div className="col-sm-2 user-id">
                            {object.name}
                        </div>
                        <div className="col-sm-1 user-id">
                            {object.age}
                        </div>
                        <div className="col-sm-2 user-id">
                            {object.gender}
                        </div>
                        <div className="col-sm-2 user-id">
                            {object.email}
                        </div>
                        <div className="col-sm-2 user-id">
                            {object.phoneNo}
                        </div>
                       
                    </div>
                )
            });
        }
        
        return(
            <div className="login">
                <div className="container">
                     <div className="row header-section">
                        <div className="col-md-4">
                            <button  className="btn btn-info btn-block mt-2">USER LIST</button>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className={classnames('form-control form-control-lg search-field')}
                                placeholder="Search by User Name"
                                name="name"
                                onChange={this.searchHandle}
                            />
                        </div>
                    </div>
                    <div className="user-header row">
                        <div className="col-sm-1">ID</div>
                        <div className="col-sm-2">Avatar</div>
                        <div className="col-sm-2">Name</div>
                        <div className="col-sm-1">Age</div>
                        <div className="col-sm-2">Gender</div>
                        <div className="col-sm-2">Email</div>
                        <div className="col-sm-2">Phone</div>
                    </div>
                    {listData&&listData.length>0?listData:<div className="no-data-found">No Result found</div>}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
    list: state.list
  }
}
  ;
  
  export default connect(mapStateToProps, { listUser })(UserList);
// export default UserList;