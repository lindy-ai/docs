export const IntegrationLogoGrid = () => {
  const logos = [
    'slack', 'gmail', 'google-calendar', 'microsoft-outlook', 'notion', 'google-sheets', 'hubspot', 'salesforce',
    'google-drive', 'microsoft-teams', 'zoom', 'linear', 'jira', 'github', 'figma', 'airtable',
    'asana', 'trello', 'monday-com-api-key', 'clickup', 'basecamp', 'todoist', 'dropbox', 'box',
    'google-docs', 'google-slides', 'google-meet', 'calendly', 'typeform', 'jotform', 'webflow', 'wordpress-org',
    'stripe', 'shopify', 'quickbooks', 'xero-accounting', 'intercom', 'zendesk', 'freshdesk', 'help-scout',
    'google-ads', 'mailchimp', 'linkedin', 'youtube', 'reddit', 'posthog', 'snowflake', 'datadog',
  ];

  return (
    <div
      className="integrations-logo-grid"
      role="img"
      aria-label={`Logos of ${logos.length} integrations, including Slack, Gmail, Google Calendar, HubSpot, and Salesforce`}
    >
      {logos.map((tool) => (
        <div className="integrations-logo-tile" key={tool}>
          <img
            className="integrations-logo"
            src={`/lindy-brand-assets/integrations/logos/${tool}.webp`}
            alt=""
            width="64"
            height="64"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
};
