# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS so that contact form submissions are sent to `panchalajay717@gmail.com`.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_axbtt7a`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Configure the template as follows:

### Template Configuration:
- **Template Name**: Contact Form Template
- **Subject**: New Contact Form Message from {{user_name}}

### Template Content:
```html
To: {{to_email}}
From: {{user_email}}
Name: {{user_name}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_1ziboq3`)

## Step 4: Get Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `Rz7W9pVF0HdDryNNL`)

## Step 5: Update Environment Variables

Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Test the Contact Form

1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email `panchalajay717@gmail.com` for the message

## Step 7: Deploy with Environment Variables

When deploying to Vercel, Netlify, or other platforms, make sure to set the environment variables in your deployment settings.

### For Vercel:
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add each variable:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## Troubleshooting

- **Emails not sending**: Check your EmailJS service configuration
- **Template not found**: Verify your template ID is correct
- **Authentication errors**: Re-authenticate your email service
- **Environment variables not working**: Make sure they're set correctly in your deployment platform

## Current Configuration

Your contact form is already configured with these fallback values:
- Service ID: `service_axbtt7a`
- Template ID: `template_1ziboq3`
- Public Key: `Rz7W9pVF0HdDryNNL`

If these are your actual EmailJS credentials, the form should work immediately. If not, update them with your real credentials.
