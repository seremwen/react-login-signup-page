import React from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div>
         <h4 class="mt-0">Reset Password</h4>
                        <p class="text-muted mb-4">Enter your email address and we'll send you an email with instructions to reset your password.</p>

                      
                        <form action="#">
                            <div class="form-group mb-3">
                                <label for="emailaddress">Email address</label>
                                <input class="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                            </div>
                            <div class="form-group mb-0 text-center">
                                <button class="btn btn-primary btn-block" type="submit"><i class="mdi mdi-lock-reset"></i> Reset Password </button>
                            </div>
                            
                        </form>
          
                        <footer class="footer footer-alt">
                            <p class="text-muted">Back to <Link to="/" class="text-muted ml-1"><b>Log In</b></Link></p>
       
                        </footer>
    </div>
  )
}

export default ForgotPassword
