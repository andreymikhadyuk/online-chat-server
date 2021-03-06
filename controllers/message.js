const MessageService = require('../services/message');
const ResponseService = require('../services/response');

const saveMessage = (req, res) => {
  if (!req.user) return ResponseService.sendUnauthorized(res);
  const { text, createdAt } = req.body;
  MessageService.saveMessage(req.user.id, { text, createdAt })
    .then(() =>  ResponseService.sendOk(res))
    .catch(() => ResponseService.sendError(res));
};

const getMessages = (req, res) => {
  if (!req.user) return ResponseService.sendUnauthorized(res);
  MessageService.getMessages()
    .then((messages) =>  ResponseService.sendOk(res, { messages }))
    .catch(() => ResponseService.sendError(res));
};

module.exports = {
  saveMessage,
  getMessages,
};