# EmailJS Setup Guide for Mach 1 Auto Styling

Follow these steps to get your contact form working with real email delivery.

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" (top right)
3. Sign up with Google or create an account
4. Confirm your email address

## Step 2: Add Email Service

1. Once logged in, go to https://dashboard.emailjs.com/admin
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended if you use Gmail)
   - **Outlook/Hotmail**
   - **Yahoo**
   - Or any other provider

### If using Gmail:
1. Select "Gmail"
2. Click "Connect Account"
3. Log in with the Gmail you want to receive emails at (info@mach1auto.com)
4. Allow EmailJS permissions
5. Give it a name like "Mach1 Contact Form"
6. Click "Create Service"
7. **COPY THE SERVICE ID** (looks like: service_abc1234)

## Step 3: Create Email Template

1. Go to "Email Templates" tab
2. Click "Create New Template"
3. Delete the default content and paste this:

```
Subject: New Contact Form Submission - {{service}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested In: {{service}}

Message:
{{message}}

---
Sent from Mach 1 Auto Styling website contact form
```

4. In the "To Email" field, enter: `info@mach1auto.com`
5. In the "From Name" field, enter: `{{from_name}}`
6. In the "Reply To" field, enter: `{{from_email}}`
7. Click "Save"
8. **COPY THE TEMPLATE ID** (looks like: template_xyz5678)

## Step 4: Get Your Public Key

1. Go to "Account" tab (https://dashboard.emailjs.com/admin/account)
2. Find "API Keys" section
3. **COPY YOUR PUBLIC KEY** (looks like: AbC123XyZ456...)

## Step 5: Add Keys to Your Project

1. Open the `.env` file in your project
2. Replace the placeholder values with your actual keys:

```
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=AbC123XyZ456...
```

3. Save the file

## Step 6: Test the Form

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5173
3. Scroll to the contact form
4. Fill it out and submit
5. Check your email (info@mach1auto.com)!

## Step 7: Deploy to Render

When deploying to Render, you need to add these environment variables:

1. Go to your Render dashboard
2. Select your site
3. Go to "Environment" tab
4. Add each variable:
   - `VITE_EMAILJS_SERVICE_ID` = your service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = your template ID
   - `VITE_EMAILJS_PUBLIC_KEY` = your public key
5. Save and redeploy

## Troubleshooting

**"Email not received":**
- Check spam/junk folder
- Verify email address in EmailJS template is correct
- Check EmailJS dashboard for delivery status

**"Something went wrong" error:**
- Make sure .env values are correct (no quotes, no spaces)
- Restart dev server after changing .env
- Check browser console for specific error

**"429 Too Many Requests":**
- Free tier limit is 200 emails/month
- Wait or upgrade to paid plan

## Optional: Auto-Reply to Customers

To send an automatic "Thank you" email to customers:

1. In EmailJS, create a second template
2. Set "To Email" to: `{{from_email}}`
3. Add a nice thank you message
4. Update Contact.jsx to send both emails

Need help? Email support: brauliopantoja@example.com

---

**Security Note:** Never commit your .env file to Git. It's already in .gitignore.
