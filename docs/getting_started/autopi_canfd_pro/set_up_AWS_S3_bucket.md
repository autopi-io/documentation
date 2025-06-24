---
id: set_up_AWS_S3_bucket
title: Amazon Web Services (AWS) S3 Bucket Creation
supportedDevices: ['pro']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---
This guide will walk you through on how to create an Amazon Web Services (AWS) S3 bucket. If you want your data from AutoPi CAN-FD Pro device to be uploaded to Amazon S3 bucket, you will need to create a AWS account and S3 bucket and configure the settings for Output handlers in AutoPi cloud. 

**Quick Start Summary:**
1. Create an Amazon Web Services account.
2. Create an S3 Bucket. 
3. Create users and assign permissions. 
3. Create Access key and secret key to access the S3 bucket (make sure to save it). 
4. Fill in Access Key ID, Access Secret Key and Destination Path under CAN Logger on AutoPi cloud. 

---
## What is AWS S3?

Amazon S3 (Simple Storage Service) is a cloud-based storage service offered by Amazon Web Services (AWS). An S3 bucket is essentially a container where you can store and organize files (called "objects") such as logs, images, videos, backups, and more.
Each bucket can hold an unlimited number of files and is accessible over the internet, making it ideal for securely storing and retrieving data from anywhere.

---

## AWS Bucket Creation

Follow the steps below to create AWS S3 bucket.

### Step 1: Create an Amazon Web Services (AWS) account

* Open this link to access: [Amazon's AWS portal](https://signin.aws.amazon.com/signup?request_type=register).
* Sign up: fill out your email address and AWS account name and click on "Verify email address".
* Verification code is included in the auto-generated email and send to the email address you provided; follow the instructions provided in the email to finish the verification process.

![Sign up for AWS](/img/getting_started/autopi_canfd_pro/aws_creation/sign_up.png)

:::note
Once the sign up process is finalized the "root user" is created as an account owner on AWS. Make sure this a correct user as it will allow the user to access all AWS services and resources in the account.
:::


### Step 2: Create a Bucket

* Sign in to your AWS account.
* Open S3 console by navigating to "Services" and choosing "Storage".
* Click on "Create bucket" in the upper right corner.
    ![Create bucket](/img/getting_started/autopi_canfd_pro/aws_creation/create_bucket.png)
* Fill in all required fields: Bucket name and AWS Region (if not already set).
    ![Fill out the bucket form](/img/getting_started/autopi_canfd_pro/aws_creation/create_bucket_form.png)
* Optionally copy settings from existing bucket.
* Click on "Create bucket" at the bottom of the page. 
    ![Save changes for creating bucket](/img/getting_started/autopi_canfd_pro/aws_creation/save_bucket.png)
* Once created, the bucket can be seen in the buckets list. 
    ![Buckets list](/img/getting_started/autopi_canfd_pro/aws_creation/buckets_list.png)

:::note
Enter a globally unique bucket name following AWS naming conventions. You can read more here: [General purpose bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html?icmpid=docs_amazons3_console).
:::

:::tip
(Optional) Upload a Test File: Open your new bucket and click "Upload" to add a file or folder to verify the bucket is working correctly.
:::

---
## Access Key and Secret Key Creation
In order to allow your AutoPi CAN-FD Pro device to send data to your S3 bucket you need to generate and store IAM (Identity and Access Management) credentials. 

### Step 1: Create Users with Correct Permissions
* Sign in to an existing AWS account by clicling [here](https://eu-north-1.signin.aws.amazon.com/oauth?client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&code_challenge=2X8Gz8x64bnC_u1PtIKJ2ho3L1pQzeV000fZ2yzsH_g&code_challenge_method=SHA-256&response_type=code&redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26state%3DhashArgsFromTB_eu-north-1_217c4b6452c80190).
* Open IAM console by navigating to Services > All services > IAM. 
![IAM Console](/img/getting_started/autopi_canfd_pro/aws_creation/iam_console.png)
* Under "Access management" click on "Users".
* Either select an existing IAM user or create a new one.
* (Optional) To create a new user: 
     * Click "Create user".
    ![IAM users](/img/getting_started/autopi_canfd_pro/aws_creation/create_user.png)
    * Assign a meaningful user name. 
    * Click "Next".
    * Assign permissions: 
        * Option A: Add the user to an already existing group with S3 access or create a new group; or copy permissions. 
        * Option B: Attach policies directly.
    * Click "Next". 
    * Click "Create user".
    * Your user was succesfully created and is now shown in the users list.
    ![New user created](/img/getting_started/autopi_canfd_pro/aws_creation/users_list.png)


### Step 2: Create Access Key
* Navigate to Users list and click on the user you want to create access keys for. The new window will open: 
![Security credentials](/img/getting_started/autopi_canfd_pro/aws_creation/security_credentials.png)
* Navigate to Security credentials and click Create access key: 
![Create access key](/img/getting_started/autopi_canfd_pro/aws_creation/create_key.png)
* "Access key best practises & alternatives" page is open, select "Other" at the bottom of the page.
* (Optional) Specify the description tag.
* Click on "Create access key".
* Your Access and Secure Access keys are generated.
* Copy your Access Key ID and Secret Access Key. 

:::warning
**Once the access key and the secret access keys are generated, copy and paste them to a secure location, as you can view the Secret access key only once.**
:::

---

## Uploading Data to AWS S3 Bucket from AutoPi CAN-FD Pro

The AutoPi CAN-FD Pro device supports two types of data logging:
* Raw data – captures everything exactly as received. 
* Decoded data – data is processed and translated before storing. 

By default, all data is logged and stored locally on the device. However, you can easily configure the device to upload your logged data directly to an AWS S3 bucket (both Raw data and Decoded data). Here’s how to do it:
* On your Pro device, go to: CAN Logging → Loggers.
* Create a new logger or edit an existing one.
* Navigate to Step 5: Outputs. This is where you define where the logged data should be sent. You can also read more here: [Output handler configuration explained](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-user-guide/#step-4-outputs). 
![Output handler for S3](/img/getting_started/autopi_canfd_pro/user_guide/empty_s3.png)
* To upload to AWS S3, fill in the following fields:
    * **Access Key ID** – your AWS access key.
    * **Secret Access Key** – your AWS secret key.
    * **Destination Path** – the URL of your S3 bucket (e.g., s3://your-bucket-name/folder)
* (Optional) Configure Advanced Settings:
    * Exclude Patterns – to filter out specific data
    * Sync Interval – how often the device syncs data
    * Error Retry Interval – wait time before retrying a failed upload
    * Job Timeout – how long to wait before canceling a sync job
* Save your settings.

Once saved, your device will begin uploading data to the specified S3 bucket based on the configuration you've chosen.

:::note 
You can read more about advanced settings for S3 upload process here: [Advanced settings for Output Handler](https://docs.autopi.io/getting_started/autopi_canfd_pro/pro-user-guide/#advanced-settings-for-output-handler)
:::