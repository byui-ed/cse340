// Route to build login view
router.get("/login", utilities.handleErrors(accountController.buildLogin))

router.post('/register', utilities.handleErrors(accountController.registerAccount))