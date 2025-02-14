// Route to build login view
router.get("/login", utilities.handleErrors(accountController.buildLogin))

router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildManagement))

// Process the login request
router.post(
    "/login",
    regValidate.loginRules(),
    regValidate.checkLoginData,
    utilities.handleErrors(accountController.accountLogin)
  )

router.post('/register', utilities.handleErrors(accountController.registerAccount))

