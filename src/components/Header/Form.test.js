import { render, screen } from "@testing-library/react"
import Form from "./Form"
import userEvent from "@testing-library/user-event"


test("form gönderildiğinde aratma fonksiyonu çalışır", async() => {

    const mockFn = jest.fn()
    const user = userEvent.setup()

   const {getAllByPlaceholderText, getByRole}= render(<Form handleSubmit={mockFn}/>)

    const input = getAllByPlaceholderText(/Ülke/i)
    const btn = getByRole("button")

    // inputa turkey yaz
    await user.type(input, "Turkey")

    // butona tıkla
    await user.click(btn)

    // fonksion çağrıldı mı
    expect(mockFn).toHaveBeenCalled()

})