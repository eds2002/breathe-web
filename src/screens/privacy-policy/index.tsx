export function PrivacyPolicyScreen() {
	return (
		<main className="min-h-screen bg-black text-white">
			<div className="max-w-3xl mx-auto px-6 py-48">
				<header className="mb-12">
					<h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
					<p className="text-lg text-white/60">
						Privacy Policy for <b className="text-white">Breathe</b>
					</p>
					<p className="text-sm text-white/60 mt-2">
						Effective Date: <b className="text-white">July 7, 2025</b>
					</p>
				</header>

				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							1. Information We Collect
						</h2>
						<div className="space-y-4">
							<div>
								<h3 className="text-lg font-medium mb-2">Currently:</h3>
								<ul className="leading-relaxed opacity-90 space-y-2 list-disc list-inside">
									<li>
										App preferences (themes, haptic settings, visual settings)
										stored locally on your device
									</li>
									<li>
										No personal information is collected or stored on our
										servers
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-medium mb-2">
									Planned Future Collection:
								</h3>
								<ul className="leading-relaxed opacity-90 space-y-2 list-disc list-inside">
									<li>
										Anonymous usage analytics to improve app performance and
										user experience
									</li>
									<li>Crash reports to identify and fix technical issues</li>
									<li>
										General device information (device type, operating system
										version)
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							2. How We Use Information
						</h2>
						<ul className="leading-relaxed opacity-90 space-y-2 list-disc list-inside">
							<li>
								Local preferences: To maintain your personalized app settings
							</li>
							<li>
								Analytics (when implemented): To understand app usage patterns
								and improve functionality
							</li>
							<li>Crash reports: To identify and resolve technical issues</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							3. Data Storage and Security
						</h2>
						<ul className="leading-relaxed opacity-90 space-y-2 list-disc list-inside">
							<li>
								All user preferences are stored locally on your device only
							</li>
							<li>
								We do not currently maintain servers or databases with user
								information
							</li>
							<li>
								When analytics are implemented, data will be anonymized and
								aggregated
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							4. Third-Party Services
						</h2>
						<ul className="leading-relaxed opacity-90 space-y-2 list-disc list-inside">
							<li>We currently do not use any third-party services</li>
							<li>
								When analytics are implemented, we may use services like PostHog
								or Vexo
							</li>
							<li>
								Any third-party services will be disclosed in updated privacy
								policies
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
						<ul className="leading-relaxed opacity-90 space-y-2 list-disc list-inside">
							<li>
								We do not sell, trade, or share your personal information with
								third parties
							</li>
							<li>
								Anonymous, aggregated analytics data may be used for app
								improvement purposes
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
						<ul className="leading-relaxed opacity-90 space-y-2 list-disc list-inside">
							<li>You can reset app preferences by reinstalling the app</li>
							<li>You can contact us with privacy-related questions</li>
							<li>
								When analytics are implemented, you may have options to opt-out
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							7. Children's Privacy
						</h2>
						<ul className="leading-relaxed opacity-90 space-y-2 list-disc list-inside">
							<li>
								The app is designed to be used without creating accounts or
								sharing personal information
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							8. Changes to Privacy Policy
						</h2>
						<p className="leading-relaxed opacity-90">
							We may update this Privacy Policy periodically. Continued use of
							the App constitutes acceptance of any changes.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
						<p className="leading-relaxed opacity-90">
							For privacy-related questions, contact us at:
							<a href="https://x.com/trpfsu" className="text-blue-500">
								{" "}
								@trpfsu
							</a>{" "}
							or{" "}
							<a href="mailto:es23jr@gmail.com" className="text-blue-500">
								es23jr@gmail.com
							</a>
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
						<p className="leading-relaxed opacity-90">
							This Privacy Policy is governed by the laws of New Jersey, United
							States.
						</p>
					</section>
				</div>
			</div>
		</main>
	);
}
