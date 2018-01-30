// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class Auth extends Client {
  constructor(options = {}) {
    super({
      baseUrl: 'https://auth.taskcluster.net/v1',
      exchangePrefix: '',
      ...options
    });
    this.listClients.entry = {type:'function',method:'get',route:'/clients/',query:['prefix'],args:[],name:'listClients',stability:'stable',output:true}; // eslint-disable-line
    this.client.entry = {type:'function',method:'get',route:'/clients/<clientId>',query:[],args:['clientId'],name:'client',stability:'stable',output:true}; // eslint-disable-line
    this.createClient.entry = {type:'function',method:'put',route:'/clients/<clientId>',query:[],args:['clientId'],name:'createClient',stability:'stable',scopes:[['auth:create-client:<clientId>']],input:true,output:true}; // eslint-disable-line
    this.resetAccessToken.entry = {type:'function',method:'post',route:'/clients/<clientId>/reset',query:[],args:['clientId'],name:'resetAccessToken',stability:'stable',scopes:[['auth:reset-access-token:<clientId>']],output:true}; // eslint-disable-line
    this.updateClient.entry = {type:'function',method:'post',route:'/clients/<clientId>',query:[],args:['clientId'],name:'updateClient',stability:'stable',scopes:[['auth:update-client:<clientId>']],input:true,output:true}; // eslint-disable-line
    this.enableClient.entry = {type:'function',method:'post',route:'/clients/<clientId>/enable',query:[],args:['clientId'],name:'enableClient',stability:'stable',scopes:[['auth:enable-client:<clientId>']],output:true}; // eslint-disable-line
    this.disableClient.entry = {type:'function',method:'post',route:'/clients/<clientId>/disable',query:[],args:['clientId'],name:'disableClient',stability:'stable',scopes:[['auth:disable-client:<clientId>']],output:true}; // eslint-disable-line
    this.deleteClient.entry = {type:'function',method:'delete',route:'/clients/<clientId>',query:[],args:['clientId'],name:'deleteClient',stability:'stable',scopes:[['auth:delete-client:<clientId>']]}; // eslint-disable-line
    this.listRoles.entry = {type:'function',method:'get',route:'/roles/',query:[],args:[],name:'listRoles',stability:'stable',output:true}; // eslint-disable-line
    this.role.entry = {type:'function',method:'get',route:'/roles/<roleId>',query:[],args:['roleId'],name:'role',stability:'stable',output:true}; // eslint-disable-line
    this.createRole.entry = {type:'function',method:'put',route:'/roles/<roleId>',query:[],args:['roleId'],name:'createRole',stability:'stable',scopes:[['auth:create-role:<roleId>']],input:true,output:true}; // eslint-disable-line
    this.updateRole.entry = {type:'function',method:'post',route:'/roles/<roleId>',query:[],args:['roleId'],name:'updateRole',stability:'stable',scopes:[['auth:update-role:<roleId>']],input:true,output:true}; // eslint-disable-line
    this.deleteRole.entry = {type:'function',method:'delete',route:'/roles/<roleId>',query:[],args:['roleId'],name:'deleteRole',stability:'stable',scopes:[['auth:delete-role:<roleId>']]}; // eslint-disable-line
    this.expandScopesGet.entry = {type:'function',method:'get',route:'/scopes/expand',query:[],args:[],name:'expandScopesGet',stability:'deprecated',input:true,output:true}; // eslint-disable-line
    this.expandScopes.entry = {type:'function',method:'post',route:'/scopes/expand',query:[],args:[],name:'expandScopes',stability:'stable',input:true,output:true}; // eslint-disable-line
    this.currentScopes.entry = {type:'function',method:'get',route:'/scopes/current',query:[],args:[],name:'currentScopes',stability:'stable',output:true}; // eslint-disable-line
    this.awsS3Credentials.entry = {type:'function',method:'get',route:'/aws/s3/<level>/<bucket>/<prefix>',query:['format'],args:['level','bucket','prefix'],name:'awsS3Credentials',stability:'stable',scopes:[['auth:aws-s3:<level>:<bucket>/<prefix>']],output:true}; // eslint-disable-line
    this.azureAccounts.entry = {type:'function',method:'get',route:'/azure/accounts',query:[],args:[],name:'azureAccounts',stability:'stable',scopes:[['auth:azure-table:list-accounts']],output:true}; // eslint-disable-line
    this.azureTables.entry = {type:'function',method:'get',route:'/azure/<account>/tables',query:['continuationToken'],args:['account'],name:'azureTables',stability:'stable',scopes:[['auth:azure-table:list-tables:<account>']],output:true}; // eslint-disable-line
    this.azureTableSAS.entry = {type:'function',method:'get',route:'/azure/<account>/table/<table>/<level>',query:[],args:['account','table','level'],name:'azureTableSAS',stability:'stable',scopes:[['auth:azure-table:<level>:<account>/<table>']],output:true}; // eslint-disable-line
    this.azureBlobSAS.entry = {type:'function',method:'get',route:'/azure/<account>/containers/<container>/<level>',query:[],args:['account','container','level'],name:'azureBlobSAS',stability:'stable',scopes:[['auth:azure-blob:<level>:<account>/<container>']],output:true}; // eslint-disable-line
    this.sentryDSN.entry = {type:'function',method:'get',route:'/sentry/<project>/dsn',query:[],args:['project'],name:'sentryDSN',stability:'stable',scopes:[['auth:sentry:<project>']],output:true}; // eslint-disable-line
    this.statsumToken.entry = {type:'function',method:'get',route:'/statsum/<project>/token',query:[],args:['project'],name:'statsumToken',stability:'stable',scopes:[['auth:statsum:<project>']],output:true}; // eslint-disable-line
    this.webhooktunnelToken.entry = {type:'function',method:'get',route:'/webhooktunnel',query:[],args:[],name:'webhooktunnelToken',stability:'stable',scopes:[['auth:webhooktunnel']],output:true}; // eslint-disable-line
    this.authenticateHawk.entry = {type:'function',method:'post',route:'/authenticate-hawk',query:[],args:[],name:'authenticateHawk',stability:'stable',input:true,output:true}; // eslint-disable-line
    this.testAuthenticate.entry = {type:'function',method:'post',route:'/test-authenticate',query:[],args:[],name:'testAuthenticate',stability:'stable',input:true,output:true}; // eslint-disable-line
    this.testAuthenticateGet.entry = {type:'function',method:'get',route:'/test-authenticate-get/',query:[],args:[],name:'testAuthenticateGet',stability:'stable',output:true}; // eslint-disable-line
    this.ping.entry = {type:'function',method:'get',route:'/ping',query:[],args:[],name:'ping',stability:'stable'}; // eslint-disable-line
  }

  // Get a list of all clients.  With `prefix`, only clients for which
  // it is a prefix of the clientId are returned.
  listClients(...args) {
    this.validate(this.listClients.entry, args);
    return this.request(this.listClients.entry, args);
  }

  // Get information about a single client.
  client(...args) {
    this.validate(this.client.entry, args);
    return this.request(this.client.entry, args);
  }

  // Create a new client and get the `accessToken` for this client.
  // You should store the `accessToken` from this API call as there is no
  // other way to retrieve it.
  // If you loose the `accessToken` you can call `resetAccessToken` to reset
  // it, and a new `accessToken` will be returned, but you cannot retrieve the
  // current `accessToken`.
  // If a client with the same `clientId` already exists this operation will
  // fail. Use `updateClient` if you wish to update an existing client.
  // The caller's scopes must satisfy `scopes`.
  createClient(...args) {
    this.validate(this.createClient.entry, args);
    return this.request(this.createClient.entry, args);
  }

  // Reset a clients `accessToken`, this will revoke the existing
  // `accessToken`, generate a new `accessToken` and return it from this
  // call.
  // There is no way to retrieve an existing `accessToken`, so if you loose it
  // you must reset the accessToken to acquire it again.
  resetAccessToken(...args) {
    this.validate(this.resetAccessToken.entry, args);
    return this.request(this.resetAccessToken.entry, args);
  }

  // Update an exisiting client. The `clientId` and `accessToken` cannot be
  // updated, but `scopes` can be modified.  The caller's scopes must
  // satisfy all scopes being added to the client in the update operation.
  // If no scopes are given in the request, the client's scopes remain
  // unchanged
  updateClient(...args) {
    this.validate(this.updateClient.entry, args);
    return this.request(this.updateClient.entry, args);
  }

  // Enable a client that was disabled with `disableClient`.  If the client
  // is already enabled, this does nothing.
  // This is typically used by identity providers to re-enable clients that
  // had been disabled when the corresponding identity's scopes changed.
  enableClient(...args) {
    this.validate(this.enableClient.entry, args);
    return this.request(this.enableClient.entry, args);
  }

  // Disable a client.  If the client is already disabled, this does nothing.
  // This is typically used by identity providers to disable clients when the
  // corresponding identity's scopes no longer satisfy the client's scopes.
  disableClient(...args) {
    this.validate(this.disableClient.entry, args);
    return this.request(this.disableClient.entry, args);
  }

  // Delete a client, please note that any roles related to this client must
  // be deleted independently.
  deleteClient(...args) {
    this.validate(this.deleteClient.entry, args);
    return this.request(this.deleteClient.entry, args);
  }

  // Get a list of all roles, each role object also includes the list of
  // scopes it expands to.
  listRoles(...args) {
    this.validate(this.listRoles.entry, args);
    return this.request(this.listRoles.entry, args);
  }

  // Get information about a single role, including the set of scopes that the
  // role expands to.
  role(...args) {
    this.validate(this.role.entry, args);
    return this.request(this.role.entry, args);
  }

  // Create a new role.
  // The caller's scopes must satisfy the new role's scopes.
  // If there already exists a role with the same `roleId` this operation
  // will fail. Use `updateRole` to modify an existing role.
  // Creation of a role that will generate an infinite expansion will result
  // in an error response.
  createRole(...args) {
    this.validate(this.createRole.entry, args);
    return this.request(this.createRole.entry, args);
  }

  // Update an existing role.
  // The caller's scopes must satisfy all of the new scopes being added, but
  // need not satisfy all of the client's existing scopes.
  // An update of a role that will generate an infinite expansion will result
  // in an error response.
  updateRole(...args) {
    this.validate(this.updateRole.entry, args);
    return this.request(this.updateRole.entry, args);
  }

  // Delete a role. This operation will succeed regardless of whether or not
  // the role exists.
  deleteRole(...args) {
    this.validate(this.deleteRole.entry, args);
    return this.request(this.deleteRole.entry, args);
  }

  // Return an expanded copy of the given scopeset, with scopes implied by any
  // roles included.
  // This call uses the GET method with an HTTP body.  It remains only for
  // backward compatibility.
  expandScopesGet(...args) {
    this.validate(this.expandScopesGet.entry, args);
    return this.request(this.expandScopesGet.entry, args);
  }

  // Return an expanded copy of the given scopeset, with scopes implied by any
  // roles included.
  expandScopes(...args) {
    this.validate(this.expandScopes.entry, args);
    return this.request(this.expandScopes.entry, args);
  }

  // Return the expanded scopes available in the request, taking into account all sources
  // of scopes and scope restrictions (temporary credentials, assumeScopes, client scopes,
  // and roles).
  currentScopes(...args) {
    this.validate(this.currentScopes.entry, args);
    return this.request(this.currentScopes.entry, args);
  }

  // Get temporary AWS credentials for `read-write` or `read-only` access to
  // a given `bucket` and `prefix` within that bucket.
  // The `level` parameter can be `read-write` or `read-only` and determines
  // which type of credentials are returned. Please note that the `level`
  // parameter is required in the scope guarding access.  The bucket name must
  // not contain `.`, as recommended by Amazon.
  // This method can only allow access to a whitelisted set of buckets.  To add
  // a bucket to that whitelist, contact the Taskcluster team, who will add it to
  // the appropriate IAM policy.  If the bucket is in a different AWS account, you
  // will also need to add a bucket policy allowing access from the Taskcluster
  // account.  That policy should look like this:
  // ```js
  // {
  //   "Version": "2012-10-17",
  //   "Statement": [
  //     {
  //       "Sid": "allow-taskcluster-auth-to-delegate-access",
  //       "Effect": "Allow",
  //       "Principal": {
  //         "AWS": "arn:aws:iam::692406183521:root"
  //       },
  //       "Action": [
  //         "s3:ListBucket",
  //         "s3:GetObject",
  //         "s3:PutObject",
  //         "s3:DeleteObject",
  //         "s3:GetBucketLocation"
  //       ],
  //       "Resource": [
  //         "arn:aws:s3:::<bucket>",
  //         "arn:aws:s3:::<bucket>/*"
  //       ]
  //     }
  //   ]
  // }
  // ```
  // The credentials are set to expire after an hour, but this behavior is
  // subject to change. Hence, you should always read the `expires` property
  // from the response, if you intend to maintain active credentials in your
  // application.
  // Please note that your `prefix` may not start with slash `/`. Such a prefix
  // is allowed on S3, but we forbid it here to discourage bad behavior.
  // Also note that if your `prefix` doesn't end in a slash `/`, the STS
  // credentials may allow access to unexpected keys, as S3 does not treat
  // slashes specially.  For example, a prefix of `my-folder` will allow
  // access to `my-folder/file.txt` as expected, but also to `my-folder.txt`,
  // which may not be intended.
  // Finally, note that the `PutObjectAcl` call is not allowed.  Passing a canned
  // ACL other than `private` to `PutObject` is treated as a `PutObjectAcl` call, and
  // will result in an access-denied error from AWS.  This limitation is due to a
  // security flaw in Amazon S3 which might otherwise allow indefinite access to
  // uploaded objects.
  // **EC2 metadata compatibility**, if the querystring parameter
  // `?format=iam-role-compat` is given, the response will be compatible
  // with the JSON exposed by the EC2 metadata service. This aims to ease
  // compatibility for libraries and tools built to auto-refresh credentials.
  // For details on the format returned by EC2 metadata service see:
  // [EC2 User Guide](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#instance-metadata-security-credentials).
  awsS3Credentials(...args) {
    this.validate(this.awsS3Credentials.entry, args);
    return this.request(this.awsS3Credentials.entry, args);
  }

  // Retrieve a list of all Azure accounts managed by Taskcluster Auth.
  azureAccounts(...args) {
    this.validate(this.azureAccounts.entry, args);
    return this.request(this.azureAccounts.entry, args);
  }

  // Retrieve a list of all tables in an account.
  azureTables(...args) {
    this.validate(this.azureTables.entry, args);
    return this.request(this.azureTables.entry, args);
  }

  // Get a shared access signature (SAS) string for use with a specific Azure
  // Table Storage table.
  // The `level` parameter can be `read-write` or `read-only` and determines
  // which type of credentials are returned.  If level is read-write, it will create the
  // table if it doesn't already exist.
  azureTableSAS(...args) {
    this.validate(this.azureTableSAS.entry, args);
    return this.request(this.azureTableSAS.entry, args);
  }

  // Get a shared access signature (SAS) string for use with a specific Azure
  // Blob Storage container.
  // The `level` parameter can be `read-write` or `read-only` and determines
  // which type of credentials are returned.  If level is read-write, it will create the
  // container if it doesn't already exist.
  azureBlobSAS(...args) {
    this.validate(this.azureBlobSAS.entry, args);
    return this.request(this.azureBlobSAS.entry, args);
  }

  // Get temporary DSN (access credentials) for a sentry project.
  // The credentials returned can be used with any Sentry client for up to
  // 24 hours, after which the credentials will be automatically disabled.
  // If the project doesn't exist it will be created, and assigned to the
  // initial team configured for this component. Contact a Sentry admin
  // to have the project transferred to a team you have access to if needed
  sentryDSN(...args) {
    this.validate(this.sentryDSN.entry, args);
    return this.request(this.sentryDSN.entry, args);
  }

  // Get temporary `token` and `baseUrl` for sending metrics to statsum.
  // The token is valid for 24 hours, clients should refresh after expiration.
  statsumToken(...args) {
    this.validate(this.statsumToken.entry, args);
    return this.request(this.statsumToken.entry, args);
  }

  // Get temporary `token` and `id` for connecting to webhooktunnel
  // The token is valid for 96 hours, clients should refresh after expiration.
  webhooktunnelToken(...args) {
    this.validate(this.webhooktunnelToken.entry, args);
    return this.request(this.webhooktunnelToken.entry, args);
  }

  // Validate the request signature given on input and return list of scopes
  // that the authenticating client has.
  // This method is used by other services that wish rely on Taskcluster
  // credentials for authentication. This way we can use Hawk without having
  // the secret credentials leave this service.
  authenticateHawk(...args) {
    this.validate(this.authenticateHawk.entry, args);
    return this.request(this.authenticateHawk.entry, args);
  }

  // Utility method to test client implementations of Taskcluster
  // authentication.
  // Rather than using real credentials, this endpoint accepts requests with
  // clientId `tester` and accessToken `no-secret`. That client's scopes are
  // based on `clientScopes` in the request body.
  // The request is validated, with any certificate, authorizedScopes, etc.
  // applied, and the resulting scopes are checked against `requiredScopes`
  // from the request body. On success, the response contains the clientId
  // and scopes as seen by the API method.
  testAuthenticate(...args) {
    this.validate(this.testAuthenticate.entry, args);
    return this.request(this.testAuthenticate.entry, args);
  }

  // Utility method similar to `testAuthenticate`, but with the GET method,
  // so it can be used with signed URLs (bewits).
  // Rather than using real credentials, this endpoint accepts requests with
  // clientId `tester` and accessToken `no-secret`. That client's scopes are
  // `['test:*', 'auth:create-client:test:*']`.  The call fails if the
  // `test:authenticate-get` scope is not available.
  // The request is validated, with any certificate, authorizedScopes, etc.
  // applied, and the resulting scopes are checked, just like any API call.
  // On success, the response contains the clientId and scopes as seen by
  // the API method.
  // This method may later be extended to allow specification of client and
  // required scopes via query arguments.
  testAuthenticateGet(...args) {
    this.validate(this.testAuthenticateGet.entry, args);
    return this.request(this.testAuthenticateGet.entry, args);
  }

  // Respond without doing anything.
  // This endpoint is used to check that the service is up.
  ping(...args) {
    this.validate(this.ping.entry, args);
    return this.request(this.ping.entry, args);
  }
}
