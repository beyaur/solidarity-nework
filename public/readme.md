**Project Update Summary**

This update focuses on enhancing the website by incorporating persistent data storage on the server, allowing for better user interaction and content management. The primary data type that will be saved includes **user email subscription data**, enabling users to subscribe to website updates and receive notifications via email. Additionally, an update will be implemented to allow users to unsubscribe from these notifications at any time. To enhance security, users who wish to unsubscribe will be sent a **4-digit confirmation code** to verify their request before finalizing the cancellation. The update will introduce a new **Subscription Management Page**, where users can manage their email preferences.

The saved data will be used to send updates and announcements to subscribed users. This ensures that users who opt in receive relevant information about the website’s latest changes. This will also allow for an efficient way to directly reach out to users regarding neccessary calls for assistance and monetary help. Additionally, the ability to unsubscribe with verification provides users with control over their notifications while ensuring security and preventing accidental unsubscriptions.

---

**Type of Data and Purpose**

1. **User Email Subscription Data**
   - **Purpose**: Allows users to subscribe to website updates and receive notifications via email.
   - **Structure in JSON Format**:
   ```json
   {
      "subscription": {
         "email": "email-formatted-text-string",
         "subscribed": true,
         "verification_code": "4-digit-number"
      }
   }
   ```

---

**Wireframe Design for CRUD Implementation**
Link to the wireframes: https://drive.google.com/file/d/1d1Cua3HRhfl2whP7KWzxnpqCIaiSSqC1/view?usp=sharing 

1. **Subscription Management Page (CRUD for Email Subscriptions)**
   - Create: Users can enter their email to subscribe to updates.
   - Read: Users can view their subscription status.
   - Update: Users can change their email preferences.
   - Delete: Users can unsubscribe from email notifications but must enter a **4-digit confirmation code** sent to their email before finalizing the unsubscription.

2. **Subscription Cancellation Process**
   - User clicks “Unsubscribe.”
   - A confirmation code is sent to their registered email.
   - User enters the **4-digit code** to verify their request.
   - Upon successful verification, the email is removed from the subscription list.

This update ensures that users can easily stay informed about website changes while also having the flexibility to opt-out when desired, with an added layer of security to prevent accidental unsubscriptions.

