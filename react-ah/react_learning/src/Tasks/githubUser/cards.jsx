import React from 'react'
import { FaGithub} from 'react-icons/fa'
export default function Cards({ data }) {
    return (
        <div className="users">{
            data.map((i, v) =>
                <div className="card mb-3 usersCard" style={{ maxWidth: "430px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={i.avatar_url} class="img-fluid rounded-start" style={{ maxWidth: "130px" }} alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body ">

                                <h5 className="card-title" style={{marginTop:"7px"}} >{i.login}<FaGithub style={{color: "#5b24a3",marginLeft:"3%" }} /></h5>
                                <div className="line">
                               
                                <button type="button" className="btn "><a href={i.repos_url} className="card-link  links one ">Repo</a></button>
                                <button type="button" className="btn two "><a href={i.followers_url} className="card-link  links ">followers</a></button>
                                <button type="button" className="btn three"><a href={i.following_url} className="card-link links  ">following</a></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}

        </div>
    )
}
