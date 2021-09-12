/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.User,
 *   !proto.chat.JoinResponse>}
 */
const methodDescriptor_ChatService_join = new grpc.web.MethodDescriptor(
  '/chat.ChatService/join',
  grpc.web.MethodType.UNARY,
  proto.chat.User,
  proto.chat.JoinResponse,
  /**
   * @param {!proto.chat.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.JoinResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.User,
 *   !proto.chat.JoinResponse>}
 */
const methodInfo_ChatService_join = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.JoinResponse,
  /**
   * @param {!proto.chat.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.JoinResponse.deserializeBinary
);


/**
 * @param {!proto.chat.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.JoinResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.JoinResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatServiceClient.prototype.join =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatService/join',
      request,
      metadata || {},
      methodDescriptor_ChatService_join,
      callback);
};


/**
 * @param {!proto.chat.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.JoinResponse>}
 *     Promise that resolves to the response
 */
proto.chat.ChatServicePromiseClient.prototype.join =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatService/join',
      request,
      metadata || {},
      methodDescriptor_ChatService_join);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ChatMessage,
 *   !proto.chat.Empty>}
 */
const methodDescriptor_ChatService_sendMessage = new grpc.web.MethodDescriptor(
  '/chat.ChatService/sendMessage',
  grpc.web.MethodType.UNARY,
  proto.chat.ChatMessage,
  proto.chat.Empty,
  /**
   * @param {!proto.chat.ChatMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.ChatMessage,
 *   !proto.chat.Empty>}
 */
const methodInfo_ChatService_sendMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.Empty,
  /**
   * @param {!proto.chat.ChatMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.chat.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatServiceClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatService/sendMessage',
      request,
      metadata || {},
      methodDescriptor_ChatService_sendMessage,
      callback);
};


/**
 * @param {!proto.chat.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.chat.ChatServicePromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatService/sendMessage',
      request,
      metadata || {},
      methodDescriptor_ChatService_sendMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Empty,
 *   !proto.chat.ChatMessage>}
 */
const methodDescriptor_ChatService_reciveMsg = new grpc.web.MethodDescriptor(
  '/chat.ChatService/reciveMsg',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chat.Empty,
  proto.chat.ChatMessage,
  /**
   * @param {!proto.chat.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ChatMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.Empty,
 *   !proto.chat.ChatMessage>}
 */
const methodInfo_ChatService_reciveMsg = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.ChatMessage,
  /**
   * @param {!proto.chat.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ChatMessage.deserializeBinary
);


/**
 * @param {!proto.chat.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatServiceClient.prototype.reciveMsg =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.ChatService/reciveMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_reciveMsg);
};


/**
 * @param {!proto.chat.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatServicePromiseClient.prototype.reciveMsg =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.ChatService/reciveMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_reciveMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Empty,
 *   !proto.chat.UserList>}
 */
const methodDescriptor_ChatService_getAllUsers = new grpc.web.MethodDescriptor(
  '/chat.ChatService/getAllUsers',
  grpc.web.MethodType.UNARY,
  proto.chat.Empty,
  proto.chat.UserList,
  /**
   * @param {!proto.chat.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.UserList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.Empty,
 *   !proto.chat.UserList>}
 */
const methodInfo_ChatService_getAllUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.UserList,
  /**
   * @param {!proto.chat.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.UserList.deserializeBinary
);


/**
 * @param {!proto.chat.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatServiceClient.prototype.getAllUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.ChatService/getAllUsers',
      request,
      metadata || {},
      methodDescriptor_ChatService_getAllUsers,
      callback);
};


/**
 * @param {!proto.chat.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.UserList>}
 *     Promise that resolves to the response
 */
proto.chat.ChatServicePromiseClient.prototype.getAllUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.ChatService/getAllUsers',
      request,
      metadata || {},
      methodDescriptor_ChatService_getAllUsers);
};


module.exports = proto.chat;

