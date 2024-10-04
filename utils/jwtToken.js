export const sendToken = (user, statusCode, res, message) => {
  // Generate the JWT token
  const token = user.getJWTToken();

  // Set options for the cookie
  const options = {
    expires: new Date(Date.now() + 360000), // Set expiration time 360000 milliseconds (10 hours) from now
    httpOnly: true, // Set httpOnly to true
  };

  // Set the token as a cookie and send the response
  res.status(statusCode)
     .cookie("token", token, options)
     .json({
        success: true,
        user,
        message,
        token,
     });
};
