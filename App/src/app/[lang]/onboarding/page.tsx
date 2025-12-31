import { redirect } from 'next/navigation';

export default async function OnboardingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // Redirect to phone number screen with language prefix
  redirect(`/${lang}/onboarding/phone`);
}

