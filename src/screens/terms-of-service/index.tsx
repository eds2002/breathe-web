import { APP_NAME } from "@/constants";

export function TermsOfServiceScreen() {
	return (
		<main className="min-h-screen bg-black text-white">
			<div className="max-w-3xl mx-auto px-6 py-48">
				<header className="mb-12">
					<h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
					<p className="text-lg text-white/60">
						Terms of Service for <b className="text-white">{APP_NAME}</b>
					</p>
					<p className="text-sm text-white/60 mt-2">
						Effective Date: <b className="text-white">July 7, 2025</b>
					</p>
				</header>

				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">
							1. Acceptance of Terms
						</h2>
						<p className="leading-relaxed opacity-90">
							By downloading, installing, or using this breathing app ("App"),
							you agree to be bound by these Terms of Service ("Terms"). If you
							do not agree to these Terms, do not use the App.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							2. Description of Service
						</h2>
						<p className="leading-relaxed opacity-90">
							The App provides guided breathing exercises through visual cards
							with unique gradient designs, breathing patterns, and haptic
							feedback to assist users in breathing and relaxation practices.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">3. User Eligibility</h2>
						<p className="leading-relaxed opacity-90">
							The App is intended for users aged 4 and above.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							4. User Responsibilities
						</h2>
						<ul className="leading-relaxed opacity-90 space-y-2 list-disc list-inside">
							<li>Use the App at your own risk and discretion</li>
							<li>
								Consult healthcare professionals before using breathing
								exercises if you have medical conditions
							</li>
							<li>Do not use the App while driving or operating machinery</li>
							<li>
								The App is not a substitute for professional medical advice or
								treatment
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							5. Intellectual Property
						</h2>
						<p className="leading-relaxed opacity-90">
							All content in the App, including designs, breathing patterns, and
							user interface elements, are owned by Transakt LLC and protected
							by intellectual property laws.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">6. Disclaimers</h2>
						<ul className="leading-relaxed opacity-90 space-y-2 list-disc list-inside">
							<li>
								The App is provided "as is" without warranties of any kind
							</li>
							<li>
								Transakt LLC is not liable for any health issues, injuries, or
								damages resulting from App use
							</li>
							<li>
								The App is for wellness purposes only and not intended to
								diagnose or treat medical conditions
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							7. Limitation of Liability
						</h2>
						<p className="leading-relaxed opacity-90">
							Transakt LLC's liability is limited to the maximum extent
							permitted by law. We are not responsible for any indirect,
							incidental, or consequential damages.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
						<p className="leading-relaxed opacity-90">
							We may terminate or suspend access to the App at any time without
							prior notice for violation of these Terms.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
						<p className="leading-relaxed opacity-90">
							These Terms are governed by the laws of New Jersey, United States.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">
							10. Contact Information
						</h2>
						<p className="leading-relaxed opacity-90">
							For questions about these Terms, please contact us at:
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
						<h2 className="text-2xl font-semibold mb-4">
							11. Changes to Terms
						</h2>
						<p className="leading-relaxed opacity-90">
							We reserve the right to modify these Terms at any time. Continued
							use of the App constitutes acceptance of updated Terms.
						</p>
					</section>
				</div>
			</div>
		</main>
	);
}
