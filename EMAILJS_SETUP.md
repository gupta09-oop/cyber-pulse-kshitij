# EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to complete the setup:

## 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

## 2. Set Up Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Follow the setup instructions for your provider

## 3. Create Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

Reply directly to: {{from_email}}
```

## 4. Get Your Credentials
From your EmailJS dashboard, get these values:
- **Service ID**: From "Email Services" section
- **Template ID**: From "Email Templates" section  
- **Public Key**: From "Account" > "API Keys"

## 5. Update Your Contact Form
In `src/components/Contact.tsx`, replace these placeholders (lines 26-28):

```typescript
const serviceId = 'YOUR_SERVICE_ID';        // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
```

## 6. Test Your Form
- Save the changes
- Test the contact form on your website
- Check your email inbox for messages

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Basic email templates

## Need Help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available in their dashboard

Once configured, all contact form submissions will be sent directly to: **kshitijexploit@gmail.com**