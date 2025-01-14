import React from 'react';

/**
 * This TSX page demonstrates a structured workflow for handling different
 * product defect scenarios. All necessary CSS is included inline below so
 * that only one file is generated. 
 */

const ProductDefectWorkflow: React.FC = () => {
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
              <p>All chats in this flow start by asking the customer for their full name or Account ID using [Pull up Account]. This will pull up their account in the background with the right information related to this user.</p>
            </li>
            <li>
              <strong>Validate Purchase</strong> <em>(kb query)</em>
              <p>
                To confirm that their purchase is valid with [Validate Purchase]:
              </p>
              <ul>
                <li>Username - occasionally, the customer may not remember their username. In this case, use the Recover Username subflow in the Account Access flow.</li>
                <li>Email Address</li>
                <li>Order ID - last item, to be consistent with verify identity</li>
              </ul>
            </li>
            <li>
              <strong>Record Reason</strong> <em>(interaction)</em>
              <p>
                Refund method in [Record Reason] - valid options are:
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
              <p>Add in additional information using [Enter Details]</p>
              <ul>
                <li>If the customer chose gift card or paper check then enter the full address.</li>
                <li>If the customer chose add value or credit card then enter the account ID.</li>
              </ul>
            </li>
            <li>
              <strong>Offer Refund</strong> <em>(interaction)</em>
              <p>
                Dollar amount - enter this value into the details form (without the dollar sign)
              </p>
              <ul>
                <li>Then click [Offer Refund]</li>
                <li>If the customer does not know, the default amount is $50</li>
              </ul>
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

      {/* UPDATE REFUND */}
      <div className="section">
        <h2>2. Update Refund</h2>
        <div className="actions">
          <h3>Actions</h3>
          <ol>
            <li>
              <strong>Pull up Account</strong> <em>(interaction)</em>
              <p>Get Full Name or Account ID for [Pull up Account].</p>
            </li>
            <li>
              <strong>Validate Purchase</strong> <em>(kb query)</em>
              <p>Confirm that their purchase is valid with [Validate Purchase]:</p>
              <ul>
                <li>Username - occasionally, the customer may not remember their username. In this case, use the Recover Username subflow in the Account Access flow.</li>
                <li>Email Address</li>
                <li>Order ID - you may have gotten this already to perform the status check.</li>
              </ul>
            </li>
            <li>
              <strong>Record Reason</strong> <em>(interaction)</em>
              <p>Find out the new item they want to return:</p>
              <ul>
                <li>Get the brand and type, such as 'Old Navy Socks' or 'Nike Shoes'.</li>
                <li>Enter this into the input box and [Record Reason].</li>
              </ul>
            </li>
            <li>
              <strong>Offer Refund</strong> <em>(interaction)</em>
              <p>Get the dollar amount to refund.</p>
              <ul>
                <li>Ask for the price of the product from the customer.</li>
                <li>
                  The total refund is the amount of their previous refund plus their current one. 
                  (e.g., if their old amount is $100 and their new item is $30, then the total is '130')
                </li>
                <li>Enter the amount (without dollar sign) and then click [Offer Refund].</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            <li>The customer is adding an extra item to their existing refund. If you have not yet gotten it, ask the customer for their reason for refunding.</li>
            <li>As always, wrap up by nicely asking if the customer needs any further assistance.</li>
          </ol>
        </div>
      </div>

      {/* REFUND STATUS */}
      <div className="section">
        <h2>3. Refund Status</h2>
        <div className="actions">
          <h3>Actions</h3>
          <ol>
            <li>
              <strong>Pull up Account</strong> <em>(interaction)</em>
              <p>Get Full Name or Account ID for [Pull up Account].</p>
            </li>
            <li>
              <strong>Validate Purchase</strong> <em>(kb query)</em>
              <p>Gather details to find the appropriate order:</p>
              <ul>
                <li>Username - first</li>
                <li>Email Address - second</li>
                <li>Order ID - third</li>
                <li>Then use a KB query to [Validate Purchase].</li>
              </ul>
            </li>
            <li>
              <strong>N/A</strong> <em>(communication)</em>
              <p>Respond with the information to the customer in natural language.</p>
              <ul>
                <li>Pick a refund status from the list of three options: not started, in progress, complete.</li>
                <li>Tell the customer this is their refund status.</li>
                <li>Pick a payment method from the following three options: online, by phone, by chat.</li>
                <li>Tell the customer this is how they initiated that refund (their payment method).</li>
              </ul>
            </li>
            <li>
              <strong>Notify Internal Team</strong> <em>(interaction)</em>
              <p>If the customer is not satisfied with your answer, and would like to change their refund:</p>
              <ul>
                <li>
                  If they do not like the status: Enter 'manager' into [Notify Internal Team] and explain that you have escalated the issue to the manager.
                </li>
                <li>
                  If they do not like the payment method: Enter "change method" into [Update Order].
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            <li>Customers want to know the status and payment method of their refund.</li>
            <li>As usual, end by asking if the customer needs anything else.</li>
          </ol>
        </div>
      </div>

      {/* RETURN DUE TO STAIN */}
      <div className="section">
        <h2>4. Return Due to Stain</h2>
        <div className="actions">
          <h3>Actions</h3>
          <ol>
            <li>
              <strong>Pull up Account</strong> <em>(interaction)</em>
              <p>Get Full Name or Account ID for [Pull up Account].</p>
            </li>
            <li>
              <strong>Validate Purchase</strong> <em>(kb query)</em>
              <p>Confirm that their purchase is valid with [Validate Purchase].</p>
              <ul>
                <li>Username - occasionally, the customer may not remember their username. In this case, use the Recover Username subflow in the Account Access flow.</li>
                <li>Email Address</li>
                <li>Order ID</li>
              </ul>
            </li>
            <li>
              <strong>Membership Privileges</strong> <em>(faq/policy)</em>
              <p>Confirm their order can be returned, by checking their membership level.</p>
              <ul>
                <li><strong>Gold members:</strong> Gold members get unlimited returns.</li>
                <li>
                  <strong>Silver members:</strong> Ask for the purchase date, return possible within the last 6 months 
                  <em>or</em> ask if they have a receipt (return if user has receipt) 
                  <em>or</em> ask if in original packaging (return if in original packaging).
                </li>
                <li>
                  <strong>Bronze members:</strong> Ask for the purchase date, return possible within the last 90 days 
                  <em>or</em> ask if they have a receipt (return if user has receipt) 
                  <em>or</em> ask if in original packaging (return if in original packaging).
                </li>
                <li>
                  <strong>Guest members:</strong> Ask for the purchase date, return possible within the last 30 days 
                  <em>or</em> ask if they have a receipt (return if user has receipt).
                </li>
                <li>Enter the member level and then click the [Membership Privileges] option.</li>
              </ul>
            </li>
            <li>
              <strong>End Conversation</strong> <em>(communication)</em>
              <p>If the customer can return, tell them the good news and go to the next step. If the customer cannot return, apologize and explain the problem. Then [End Conversation].</p>
            </li>
            <li>
              <strong>Enter Details</strong> <em>(interaction)</em>
              <p>Since the customer will print out a shipping label for the return, you need their full address. You can give this explanation if the customer asks why you need the address.</p>
              <ul>
                <li>Street Number and Street Name</li>
                <li>City, State, Zip Code</li>
                <li>Fill this as one line into [Enter Details]</li>
              </ul>
            </li>
            <li>
              <strong>Update Order</strong> <em>(interaction)</em>
              <p>Ask the customer how they would like to process their return:</p>
              <ul>
                <li>Options include: 'By Mail', 'In Store', or 'Drop off Center'</li>
                <li>Fill in the form with one of these three values and submit to [Update Order].</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            <li>In all three cases for return, follow the same set of actions.</li>
            <li>As usual, end by asking if the customer needs any other assistance.</li>
          </ol>
        </div>
      </div>

      {/* RETURN DUE TO COLOR */}
      <div className="section">
        <h2>5. Return Due to Color</h2>
        <div className="actions">
          <h3>Actions</h3>
          <ol>
            <li>
              <strong>Pull up Account</strong> <em>(interaction)</em>
              <p>Get Full Name or Account ID for [Pull up Account].</p>
            </li>
            <li>
              <strong>Validate Purchase</strong> <em>(kb query)</em>
              <p>Confirm that their purchase is valid with [Validate Purchase].</p>
              <ul>
                <li>Username - occasionally, the customer may not remember their username. In this case, use the Recover Username subflow in the Account Access flow.</li>
                <li>Email Address</li>
                <li>Order ID</li>
              </ul>
            </li>
            <li>
              <strong>Membership Privileges</strong> <em>(faq/policy)</em>
              <p>Confirm their order can be returned, by checking their membership level.</p>
              <ul>
                <li><strong>Gold members:</strong> Gold members get unlimited returns.</li>
                <li>
                  <strong>Silver members:</strong> Ask for the purchase date, return possible within the last 6 months 
                  <em>or</em> ask if they have a receipt (return if user has receipt) 
                  <em>or</em> ask if in original packaging (return if in original packaging).
                </li>
                <li>
                  <strong>Bronze members:</strong> Ask for the purchase date, return possible within the last 90 days 
                  <em>or</em> ask if they have a receipt (return if user has receipt) 
                  <em>or</em> ask if in original packaging (return if in original packaging).
                </li>
                <li>
                  <strong>Guest members:</strong> Ask for the purchase date, return possible within the last 30 days 
                  <em>or</em> ask if they have a receipt (return if user has receipt).
                </li>
                <li>Enter the member level and then click the [Membership Privileges] option.</li>
              </ul>
            </li>
            <li>
              <strong>End Conversation</strong> <em>(communication)</em>
              <p>If the customer can return, tell them the good news and go to the next step. If the customer cannot return, apologize and explain the problem. Then [End Conversation].</p>
            </li>
            <li>
              <strong>Enter Details</strong> <em>(interaction)</em>
              <p>Since the customer will print out a shipping label for the return, you need their full address. You can give this explanation if the customer asks why you need the address.</p>
              <ul>
                <li>Street Number and Street Name</li>
                <li>City, State, Zip Code</li>
                <li>Fill this as one line into [Enter Details]</li>
              </ul>
            </li>
            <li>
              <strong>Update Order</strong> <em>(interaction)</em>
              <p>Ask the customer how they would like to process their return:</p>
              <ul>
                <li>Options include: 'By Mail', 'In Store', or 'Drop off Center'</li>
                <li>Fill in the form with one of these three values and submit to [Update Order].</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            <li>In all three cases for return, follow the same set of actions.</li>
            <li>As usual, end by asking if the customer needs any other assistance.</li>
          </ol>
        </div>
      </div>

      {/* RETURN DUE TO SIZE */}
      <div className="section">
        <h2>6. Return Due to Size</h2>
        <div className="actions">
          <h3>Actions</h3>
          <ol>
            <li>
              <strong>Pull up Account</strong> <em>(interaction)</em>
              <p>Get Full Name or Account ID for [Pull up Account].</p>
            </li>
            <li>
              <strong>Validate Purchase</strong> <em>(kb query)</em>
              <p>Confirm that their purchase is valid with [Validate Purchase].</p>
              <ul>
                <li>Username - occasionally, the customer may not remember their username. In this case, use the Recover Username subflow in the Account Access flow.</li>
                <li>Email Address</li>
                <li>Order ID</li>
              </ul>
            </li>
            <li>
              <strong>Membership Privileges</strong> <em>(faq/policy)</em>
              <p>Confirm their order can be returned, by checking their membership level.</p>
              <ul>
                <li><strong>Gold members:</strong> Gold members get unlimited returns.</li>
                <li>
                  <strong>Silver members:</strong> Ask for the purchase date, return possible within the last 6 months 
                  <em>or</em> ask if they have a receipt (return if user has receipt) 
                  <em>or</em> ask if in original packaging (return if in original packaging).
                </li>
                <li>
                  <strong>Bronze members:</strong> Ask for the purchase date, return possible within the last 90 days 
                  <em>or</em> ask if they have a receipt (return if user has receipt) 
                  <em>or</em> ask if in original packaging (return if in original packaging).
                </li>
                <li>
                  <strong>Guest members:</strong> Ask for the purchase date, return possible within the last 30 days 
                  <em>or</em> ask if they have a receipt (return if user has receipt).
                </li>
                <li>Enter the member level and then click the [Membership Privileges] option.</li>
              </ul>
            </li>
            <li>
              <strong>End Conversation</strong> <em>(communication)</em>
              <p>If the customer can return, tell them the good news and go to the next step. If the customer cannot return, apologize and explain the problem. Then [End Conversation].</p>
            </li>
            <li>
              <strong>Enter Details</strong> <em>(interaction)</em>
              <p>Since the customer will print out a shipping label for the return, you need their full address. You can give this explanation if the customer asks why you need the address.</p>
              <ul>
                <li>Street Number and Street Name</li>
                <li>City, State, Zip Code</li>
                <li>Fill this as one line into [Enter Details]</li>
              </ul>
            </li>
            <li>
              <strong>Update Order</strong> <em>(interaction)</em>
              <p>Ask the customer how they would like to process their return:</p>
              <ul>
                <li>Options include: 'By Mail', 'In Store', or 'Drop off Center'</li>
                <li>Fill in the form with one of these three values and submit to [Update Order].</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            <li>In all three cases for return, follow the same set of actions.</li>
            <li>As usual, end by asking if the customer needs any other assistance.</li>
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

export default ProductDefectWorkflow;
