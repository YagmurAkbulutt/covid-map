import { render, screen } from "@testing-library/react"
import Error from "."
import userEvent from "@testing-library/user-event"

describe("error bileşeni testleri", () => {
    const user = userEvent.setup()

    // fonksitonu mock la
    const retryMock = jest.fn()

    let comp;
    
    
    beforeEach(() => {
        comp = render(<Error message="failed with status code of 404" retry={retryMock}/>)
    })

    

    it(" doğru hata mesajını gösterir", () => {
        comp.getByText(/failed with/i)
    })
    
    it(" tekrar dene butonu görevini yapar", async() => {
    
        // render edilen butonu al
        const button = comp.getByRole("button")
    
        // butona tıkla
        await user.click(button)
    
        // fonksiyon çağrıldı mı
        expect(retryMock).toHaveBeenCalled()
    })
})

