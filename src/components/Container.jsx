const Container = ({ children }) => {
    return (
      <div className="auth-fluid">
        <div className="auth-fluid-form-box">
          <div className="align-items-center d-flex h-100">
            <div className="card-body">
              <div className="auth-brand text-center text-lg-left">
                <a href="index.html">
                  <span>
                    <img src="assets/images/logo-light.png" alt="" height="18" />
                  </span>
                </a>
              </div>
              {children}
            </div>
          </div>
        </div>
  
        <div className="auth-fluid-right text-center">
          <div className="auth-user-testimonial">
            <h2 className="mb-3">I love the color</h2>
            <p className="lead">
              <i className="mdi mdi-format-quote-open"></i> It's an elegant template. I love it very much! .{' '}
              <i className="mdi mdi-format-quote-close"></i>
            </p>
            <p>- Hyper Admin User</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Container;
