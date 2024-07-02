---
id: api-intro
title: Introduction
---

You are able to use the [AutoPi REST API](https://api.autopi.io) with your browser, which will display our
auto-generated documentation portal.

:::note
The documentation is auto-generated from our API, which means that the documentation will always reflect the API and
will always be up to date, but being auto-generated it unfortunately also does sacrifice some readability, but we
are working to improve this. And if you find something that you feel is not adequately documented, please let us know.
:::

![api_frontpage](/img/getting_started/api/api_intro/api_frontpage.jpg) 

## Authentication
If you want to test the endpoints, you can authenticate in the API documentation portal by setting the token to use
when authenticating. In the picture above you can see there is a green 'Authorize' button which you need to press.
This is where you'll be pasting your token.

It is possible to authenticate using two different tokens.

### API Tokens

It is specifically made for users who want to make requests to the API, and is the recommended way to make
authenticated requests to the API.

To use the token, send an authorization header like this, in all requests:

```
Authorization: APIToken YOUR_TOKEN
```

#### Creation of the API Token

You can **generate the new API Token** in the AutoPi [Cloud](https://my.autopi.io). Clicking on the in the *Account tab* in the side menu gets you to the *Account Page*.

![account_showcase](/img/getting_started/api/api_intro/account_showcase.jpg) 

On the *Account* Page you may see an API Tokens *tab* which gets you to the API Token creation part. Here you are able to create a new API Token by giving it a name and there is an *option* to set an expiration date for the token if you need and clicking the *Create* button.

![account_page](/img/getting_started/api/api_intro/account_page.jpg) 

### JWT Token

This token is the one used by the frontend when logging in.
* It expires relatively shortly.
* You need to enter you username and password to acquire the token.

You can get the JWT token in two different ways:

#### 1. Capture the Token by Using the Browser Developer Tools.
The easiest way is to capture the token by logging into the Cloud, with the developer tools open in your favourite
browser, with the network tab open, and then skip to step 6 in the below step by step guide.

#### 2. Manually Call the Auth Endpoint to get the Token.
You can follow the steps below to call the login endpoint manually.

1. Click the "auth" app to fold out the available endpoints.
2. Click the "/auth/login/".
3. Click the "try it out" button to the right.
4. Change the payload to look like this (remove the username field, and fill out the email and password fields, like so:
```
   {
      "email": "your_email",
      "password": "your_insanely_complex_password"
   }
```
5. Click the blue "execute" button.
6. Now you can copy the entire token.
7. Now click the green "Authorize" button in the top right of the page and paste the token in the field.

Remember to write "Bearer" in front of the token - like so:

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.4pXwtyQKCwSrYfcj9O7MGVv5ustPbx0GmYY7jHZL8es
```

8. After clicking close, you should now be able to call the other authenticated endpoints.

## Sending the Requests Manually Using Postman or Similar
Alternatively, if you are unable to use the above portal, or if you'd rather use something like Postman or similar,
you can still see the requests and parameters in the portal, but to call them manually, see the below steps.

**Authenticating manually w/o interactive API documentation portal**
You can do the above steps manually by following these steps:

1. Authentication
    To obtain an authentication token, send a post request to https://api.autopi.io/auth/login/
    with header

    ```
    Content-Type: application/json
    ```
    and body

    ```
    { "email": "your email address", "password": "your password" }
    ```

    In the response, you will find the token used to authenticate the below requests

2. To request data from our API, the authorization header should be set.

    You will need to set the "Authorization" header on the requests. To set the header, use the below values:

    ```
    # if you're using a JWT token
    Authorization: Bearer YOUR_TOKEN

    # if you're using an API token
    Authorization: APIToken YOUR_TOKEN
    ```

**Using developer tools to see how endpoints are used**
If you find something where you are unsure how to proceed, you can log in to my.autopi.io and use the developer tools
of your favourite browser to see the requests and parameters sent by the application, and if you are still experiencing
issues, you can send us an email to support@autopi.io

Happy developing, and as always, if you run into issues, exceptions, have suggestions etc, please let us know.

## Discussion
If you'd like to discuss this topic with us or other fellow community members, you can do so on our community
page dedicated for this guide: [Guide: Getting started with the AutoPi REST API](https://community.autopi.io/t/guide-getting-started-with-the-autopi-rest-api/497).
