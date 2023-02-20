<span class="shooting-star hidden lg:block absolute w-1 h-1 bg-neutral-100 rounded-full" />

<style>
    .shooting-star {
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1),
            0 0 20px rgba(255, 255, 255, 1);
        animation: shooting-stars 3s linear infinite;
    }
    .shooting-star::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 300px;
        height: 1px;
        background: linear-gradient(90deg, rgb(225 228 230), transparent);
    }
    @keyframes shooting-stars {
        0% {
            transform: rotate(315deg) translateX(0);
        }
        20% {
            opacity: 1;
        }
        30% {
            transform: rotate(315deg) translateX(-600px);
            opacity: 0;
        }
        100% {
            transform: rotate(315deg) translateX(-600px);
            opacity: 0;
        }
    }

    .shooting-star:nth-child(1) {
        top: -50px;
        right: 300px;
        animation-delay: 2s;
        animation-duration: 20s;
    }
    .shooting-star:nth-child(2) {
        top: -50px;
        right: 450px;
        animation-delay: 6s;
        animation-duration: 12s;
    }
    .shooting-star:nth-child(3) {
        top: -50px;
        right: 600px;
        animation-delay: 12s;
        animation-duration: 16s;
    }
</style>
