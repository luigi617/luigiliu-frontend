import React from 'react';

/**
 * This TSX page demonstrates a structured workflow for handling different
 * product defect scenarios. All necessary CSS is included inline below so
 * that only one file is generated. 
 */

const OneProductDefectWorkflow: React.FC = () => {
  return (
    <div className="container">
      <h1>Product Defect Workflow</h1>
      <p className="description">
        <strong>Description:</strong> refunds and returns
      </p>

      {/* INITIATE REFUND */}
      <div className="section">
        <h2>1. Initiate Refund</h2>
        <div className="actions">
          <h3>Actions</h3>
          <ol>
            <li>
              <strong>Pull up Account</strong> <em>(interaction)</em>
              <p>Ask the customer for their full name or Account ID using and pull up corresponding account which contains with the right information related to this user.</p>
            </li>
            <li>
              <strong>Validate Purchase</strong> <em>(kb query)</em>
              <p>
                Confirm that their purchase is valid with the data in database by checking these information:
              </p>
              <ul>
                <li>Username</li>
                <li>Email Address</li>
                <li>Order ID which the user want to initiate refund</li>
              </ul>
            </li>
            <li>
              <strong>Record Reason</strong> <em>(interaction)</em>
              <p>
                Ask for the refund method - valid options are:
              </p>
              <ul>
                <li>
                  Gift card - they want a prepaid gift card, also ask for their address so you know where to mail it. Enter this value in the next step.
                </li>
                <li>Add value - to add value to their account.</li>
                <li>
                  Paper check - also ask for their address so you know where to mail the check. Enter this address in the next step.
                </li>
                <li>
                  Credit card - direct refund to their credit card, assume a credit card is already on file. To find it, you will need the account ID, which is entered in the next step.
                </li>
              </ul>
            </li>
            <li>
              <strong>Enter Details</strong> <em>(interaction)</em>
              <p>Add in additional information depending on previous step</p>
              <ul>
                <li>If the customer chose gift card or paper check then enter the full address.</li>
                <li>If the customer chose add value or credit card then enter the account ID.</li>
              </ul>
            </li>
            <li>
              <strong>Offer Refund</strong> <em>(interaction)</em>
              <p>
                Offer refund to the user.
              </p>
            </li>
          </ol>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            <li>Start by asking for the refund reason. Then, to complete the refund, perform the above actions.</li>
            <li>As always, wrap up by nicely asking if the customer needs any further assistance.</li>
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

export default OneProductDefectWorkflow;
