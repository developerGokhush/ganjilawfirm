import WebflowInit from "@/components/WebflowInit";

export default function PasswordPage() {
  return (
    <>
      <WebflowInit pageId="68dbf1fa0f89b93c8288d0aa" siteId="68dbf1fa0f89b93c8288d0b9" />
      <div className="page-wrapper" suppressHydrationWarning>
        <div className="utility-page-wrap" suppressHydrationWarning>
          <div className="utility-page-content w-password-page w-form" suppressHydrationWarning>
            <form
              action="/.wf_auth"
              method="post"
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="utility-page-form w-password-page"
              data-wf-page-id="68dbf1fa0f89b93c8288d0aa"
              data-wf-element-id="6828346a7aa95f034a52557e00000000000c"
              suppressHydrationWarning
            >
              <img src="/assets/utility-lock.ae54711958.svg" alt="" suppressHydrationWarning />
              <h2 className="heading-style-h2" suppressHydrationWarning>
                Protected Page
              </h2>
              <div className="opacity-70" suppressHydrationWarning>
                <label htmlFor="pass" className="text-size-regular w-password-page" suppressHydrationWarning>
                  Password
                </label>
              </div>
              <input
                className="form-input w-password-page w-input"
                autoFocus
                maxLength={256}
                name="pass"
                data-name="field"
                placeholder="Enter your password"
                type="password"
                id="pass"
                suppressHydrationWarning
              />
              <input
                type="submit"
                data-wait="Please wait..."
                className="button w-password-page w-button"
                value="Submit"
                suppressHydrationWarning
              />
              <div className="w-password-page w-form-fail" suppressHydrationWarning>
                <div suppressHydrationWarning>Incorrect password. Please try again.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
