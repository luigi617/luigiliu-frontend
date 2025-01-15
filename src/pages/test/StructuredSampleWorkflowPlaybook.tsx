import React from 'react';

/**
 * This TSX page demonstrates a structured workflow for handling
 * account access scenarios including recovering a username, resetting a password, or resetting two-factor authentication.
 * All necessary CSS is included inline below so that only one file is generated.
 */

const AccountAccessWorkflow: React.FC = () => {
  return (
    <div className="container">
      <h1>Account Access Workflow</h1>
      <p className="description">
        <strong>Description:</strong> Username, password, and two-factor authentication recovery.
      </p>

      {/* RECOVER USERNAME */}
      <div className="section">
        <h2>1. Recover Username</h2>
        <div className="actions">
          <h3>Actions</h3>
          <ol>
            <li>
              <strong>Pull up Account</strong> <em>(interaction)</em>
              <p>Ask the customer for their full name or Account ID using the [Pull up Account] button to load information related to the user.</p>
            </li>
            <li>
              <strong>Verify Identity</strong> <em>(kb query)</em>
              <p>Ask the customer for 3 out of the following 4 details and use the [Verify Identity] button:</p>
              <ul>
                <li>Full name (first and last)</li>
                <li>Zip Code</li>
                <li>Phone number</li>
                <li>Email Address</li>
              </ul>
            </li>
            <li>
              <strong>Create Username</strong> <em>(communication)</em>
              <p>Create a username using the format: first letter of first name + last name + "1" (e.g., John Smith → jsmith1).</p>
            </li>
          </ol>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            <li>Follow these steps to recover the customer’s username.</li>
            <li>This process is often part of other flows, so proceed to the next step if required.</li>
          </ol>
        </div>
      </div>

      {/* RECOVER PASSWORD */}
      <div className="section">
        <h2>2. Recover Password</h2>
        <div className="actions">
          <h3>Actions</h3>
          <ol>
            <li>
              <strong>Pull up Account</strong> <em>(interaction)</em>
              <p>Ask for the full name or Account ID and use [Pull up Account].</p>
            </li>
            <li>
              <strong>Enter Details</strong> <em>(interaction)</em>
              <p>Ask for the customer’s username. If unknown, follow the "Recover Username" flow.</p>
            </li>
            <li>
              <strong>Generate New Password</strong> <em>(communication)</em>
              <p>Inform the customer that a new password will be generated as passwords cannot be retrieved.</p>
            </li>
            <li>
              <strong>Make Password</strong> <em>(kb query)</em>
              <p>Provide either the customer’s PIN or the answer to their security question to use the [Make Password] button.</p>
            </li>
          </ol>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            <li>Generate a new password and share it with the customer.</li>
            <li>Wrap up the conversation by ensuring no additional assistance is needed.</li>
          </ol>
        </div>
      </div>

      {/* RESET TWO-FACTOR AUTH */}
      <div className="section">
        <h2>3. Reset Two-Factor Authentication</h2>
        <div className="actions">
          <h3>Actions</h3>
          <ol>
            <li>
              <strong>Pull up Account</strong> <em>(interaction)</em>
              <p>Ask for the full name or Account ID and use [Pull up Account].</p>
            </li>
            <li>
              <strong>Enter Details</strong> <em>(interaction)</em>
              <p>Ask for the email address to send the reset code. If unavailable, request their PIN or answer to the security question.</p>
            </li>
            <li>
              <strong>Send Reset Code</strong> <em>(interaction)</em>
              <p>Inform the customer that the reset code will be sent to the saved email address. Use [Send Link] to provide security best practices.</p>
            </li>
          </ol>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            <li>Ensure the customer receives the reset code to proceed with authentication reset.</li>
            <li>Mark the conversation as unsuccessful if the customer is dissatisfied.</li>
          </ol>
        </div>
      </div>

      <style>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 1rem;
          font-family: Arial, sans-serif;
          color: #333;
        }

        h1 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .description {
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .section {
          margin-bottom: 3rem;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .section h2 {
          margin-top: 0;
        }

        .actions, .instructions {
          margin-top: 1rem;
        }

        .actions h3, .instructions h3 {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        ol {
          margin: 0 0 1rem 1.5rem;
        }

        ul {
          margin: 0.5rem 0 1rem 1.5rem;
          list-style-type: disc;
        }

        li {
          margin-bottom: 0.5rem;
        }

        strong {
          font-weight: bold;
        }

        em {
          font-style: italic;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default AccountAccessWorkflow;
