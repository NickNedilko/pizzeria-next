import { InfoBlock } from "@/components";



export default function NotAuthPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <InfoBlock 
                title="Доступ заборонено"
                text="Тільки авторизовані користувачі можуть бачити цю сторінку"
                imageUrl="/assets/images/lock.png"
            
            />
        </div>
    )
}