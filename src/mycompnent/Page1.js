
import React from 'react'

export default function Page1() {
  return (
    <>


      <div className="container-fluid">
        <div className="sign">
          <p className="learn">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
          <div>
            <p className="sign-in"> Sign In</p>
            <p className="new">Don’t have an account yet? <b className="bo">Create new for free!</b> </p>
            <div>
            <form className="signup-form">
              <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email" name="email" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="pwd" placeholder="Password" name="pswd" />
              </div>

              <button type="submit" class="btn btn-primary signup-button">Sign In</button>
              <br /><br />
              <button type="submit" class="btn  signup-fb fb-text"> <img src="fb-logo.png" alt="fb" /> Sign in with Facebook</button><br /> <br />
              <button type="submit" class="btn  signup-fb fb-text"> <img src="google-logo.png" alt="google" /> Sign in with Google</button>
              <img src="signup-img.png" alt="signup-img" className="img-fluid signup-img"  />
            </form>
            
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid">



        <div className="card-group">
          <div className="card ">
            <div className="card-body ">
              <h5>Android-Long</h5>

              <div className="d-flex flex-row-reverse bg-light">
                <div><img src="Path.png" /></div>
                <div ><img src="Oval.png" /></div>
                <div> <img src="Rectangle.png" /></div>
              </div>
              <img src="computer.png" className="img-fluid engg" />
              <div className="card-img-overlay">
                <button type="button" className="btn join">Join Group</button>
                <img src="arrow.png" className="img-fluid arrow" />
                <div className="card-text text"> Computer Engineering <br />
                  142,765 Computer Engineers fallow this  </div>

              </div>

              <div className="btn-group">
                <button type="button" className="btn  dropdown-toggle filter" data-toggle="dropdown">
                  Filter: All
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#"></a>
                  <a className="dropdown-item" href="#"></a>
                </div>
              </div>
              <p className="post">Post(368)</p>
              <img src="tree.png" className="img-fluid engg" />
              <img src="Article.png" className="article" />
              <p className="what">What if famous brands had regular fonts? Meet RegulaBrands!</p>
              <img src="threedot.png" alt="..." className="threedot" />
              <p className="worked">I’ve worked in UX for the better part of a decade. F..</p>
              <img src="man.png" alt="" />
              <p className="sarthak">Sarthak Kamra</p>
              <p className="view">1.4k views</p>
              <button className="btn share share-text"><img src="share.png" alt="share" /> Share</button>
              <img src="door.png" alt="door_pic" className="img-fluid door_pic" />
              <img src="Education.png" className="education" alt="educatio-pic" />
              < p className="tax">Tax Benefits for Investment under National Pension Scheme launched by Government</p>
              <img src="threedot.png" alt="threedot" className="threedot" />
              <p className="worked">I’ve worked in UX for the better part of a decade. F..</p>
              <img src="sarah.png" alt="" />
              <p className="sarthak">Sarah West</p>
              <p className="view">4.8k views</p>
              <button className="btn share share-text"><img src="share.png" alt="share" /> Share</button>
              <img src="car.png" className="img-fluid engg" alt="car_pic" />
              <img src="meetup.png" alt="meetup" />
              <p className="tax">Finance & Investment Elite Social Mixer @Lujiazui</p>
              <img src="threedot.png" alt="threedot" className="threedot" />
              <img src="calendar.png" alt="date" className="date1" />
              <p className="date">Fri, 12 Oct, 2018</p>
              <button className="btn visit"><p className="visit1">Visit Website</p></button>
              <img src="ronal.png" alt="ronal" className="ronal" />
              <p className="ronal1">Ronal Jones</p>
              <p className="ronal2" >800 views</p>
              <button className="btn share share-text"><img src="share.png" alt="share" /> Share</button>
            </div>
          </div>



          <div className="card">
            <div className="card-body ">
              <h5>Android</h5>

              <div className="d-flex flex-row-reverse bg-light">
                <div><img src="Path.png" /></div>
                <div ><img src="Oval.png" /></div>
                <div> <img src="Rectangle.png" /></div>
              </div>

              <img src="computer.png" className="img-fluid engg" />
              <div className="card-img-overlay">
                <button type="button" className="btn join">Join Group</button>
                <img src="arrow.png" className="img-fluid arrow" />

                <div className="card-text text"> Computer Engineering <br />
                  142,765 Computer Engineers fallow this  </div>
              </div>

              <div className="btn-group">
                <button type="button" className="btn  dropdown-toggle filter" data-toggle="dropdown">
                  Filter: All
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#"></a>
                  <a className="dropdown-item" href="#"></a>
                </div>
              </div>
              <p className="post">Post(368)</p>
              <img src="tree.png" className="img-fluid engg" />
              <img src="Article.png" className="article" />
              <p className="what">What if famous brands had regular fonts? Meet RegulaBrands!</p>
              <img src="threedot.png" alt="..." className="threedot" />
              <p className="worked">I’ve worked in UX for the better part of a decade. F..</p>
              <img src="man.png" alt="" />
              <p className="sarthak">Sarthak Kamra</p>
              <p className="view">1.4k views</p>
              <div className="edit"><img src="edit.png" className="edit-img" /></div>
            </div>
          </div>


          <div className="card">
            <div className="card-body ">
              <h6>Android leave Group</h6>
              <div className="d-flex flex-row-reverse bg-light">
                <div><img src="Path.png" /></div>
                <div ><img src="Oval.png" /></div>
                <div> <img src="Rectangle.png" /></div>
              </div>
              <img src="computer.png" className="img-fluid engg" />
              <div className="card-img-overlay">
                <button type="button" className="btn join">leave Group</button>
                <img src="arrow.png" className="img-fluid arrow" />
                <div className="card-text text"> Computer Engineering <br />
                  142,765 Computer Engineers fallow this  </div>
              </div>

              <div className="btn-group">
                <button type="button" className="btn  dropdown-toggle filter" data-toggle="dropdown">
                  Filter: All
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#"></a>
                  <a className="dropdown-item" href="#"></a>
                </div>
              </div>
              <p className="post">Post(368)</p>
              <img src="tree.png" className="img-fluid engg" />
              <img src="Article.png" className="article" />
              <p className="what">What if famous brands had regular fonts? Meet RegulaBrands!</p>
              <img src="threedot.png" alt="..." className="threedot" />
              <p className="worked">I’ve worked in UX for the better part of a decade. F..</p>
              <img src="man.png" alt="" />
              <p className="sarthak">Sarthak Kamra</p>
              <p className="view">1.4k views</p>
              <div className="edit"><img src="edit.png" className="edit-img" /></div>
            </div>
          </div>



        </div>
      </div>

    </>
  )
}
