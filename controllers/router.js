const router = require("express").Router();
// Authentication endpoints
const { router: Auth, version: AuthVersion } = require("./Authentication");
router.use(`/auth/v${AuthVersion}`, Auth);
const { router: User, version: UserVersion } = require("./user");
router.use(`/user/v${UserVersion}`, User);
const { router: SecurityQuestion, version: SecurityQuestionVersion } = require("./securityQuestion");
router.use(`/securityQuestion/v${SecurityQuestionVersion}`, SecurityQuestion);
module.exports = router;
