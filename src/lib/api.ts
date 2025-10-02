type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function submitContactForm(payload: ContactPayload): Promise<{ ok: boolean }> {
  await new Promise((r) => setTimeout(r, 600))
  const shouldFail = payload.message.toLowerCase().includes('fail')
  if (shouldFail) throw new Error('Mock error sending message')
  return { ok: true }
}
