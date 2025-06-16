// import React from "react";

// function UserList({ item }) {
//     return (
//         <div className="col-md-10 col-lg-8 mb-4">
//             <div className="card shadow-lg border-0">
//                 <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
//                     <h5 className="mb-0">User: {item.login.username}</h5>
//                     <img 
//                         src={item.picture.thumbnail} 
//                         alt="user pic"
//                         className="rounded-circle border border-white"
//                         style={{ width: '40px', height: '40px' }}
//                     />
//                 </div>
//                 <div className="card-body bg-light">
//                     <div className="row">
//                         <div className="col-md-8">
//                             <h4 className="card-title">{item.name.title} {item.name.first} {item.name.last}</h4>
//                             <p className="card-text">Email: <a href={`mailto:${item.email}`}>{item.email}</a></p>
//                             <p className="card-text mb-1">User for <strong>{item.registered.age}</strong> {item.registered.age === 1 ? "year" : "years"}</p>
//                             <p className="card-text mb-1">Age: {item.dob.age}</p>
//                             <p className="card-text mb-1">Nationality: {item.nat}</p>
//                             <p className="card-text mb-1">Phone: {item.phone}</p>
//                         </div>
//                         <div className="col-md-4 text-md-end">
//                             <h6 className="text-muted">Address</h6>
//                             <p className="mb-1">{item.location.street.number} {item.location.street.name}</p>
//                             <p className="mb-1">{item.location.state}, {item.location.country}</p>
//                             <p className="mb-0">{item.location.postcode}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UserList;
import React from "react";

function UserList({ item }) {
    return (
        <div className="col-12 col-md-10 col-lg-8 mb-4">
            <div className="card shadow border-0">
                <div className="card-header bg-white d-flex align-items-center">
                    <img 
                        src={item.picture.thumbnail} 
                        alt="profile"
                        className="rounded-circle border me-3"
                        style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                        <h6 className="mb-0">{item.name.first} {item.name.last}</h6>
                        <small className="text-muted">@{item.login.username}</small>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">📧 <a href={`mailto:${item.email}`}>{item.email}</a></p>
                    <p className="card-text">📞 {item.phone}</p>
                    <p className="card-text"> Age: {item.dob.age}</p>
                    <p className="card-text"> Member for: {item.registered.age} {item.registered.age === 1 ? "year" : "years"}</p>
                    <p className="card-text"> Nationality: {item.nat}</p>
                    <hr />
                    <h6 className="text-muted">🏠 Address</h6>
                    <p className="mb-0">{item.location.street.number} {item.location.street.name},</p>
                    <p className="mb-0">{item.location.state}, {item.location.country}</p>
                    <p className="mb-0">{item.location.postcode}</p>
                </div>
                
            </div>
        </div>
    )
}

export default UserList;
