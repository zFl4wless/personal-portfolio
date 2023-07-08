<script>
    import ProjectItem from '../projects/ProjectItem.svelte';
    import projects from '../../data/projects';
</script>

<section id='projects-section' class='min-h-screen px-6 xl:px-20 2xl:px-60 py-10'>
    <h2
        class="mb-16 text-4xl font-koulen font-bold text-center tracking-wide before:animate-pulse before:content-['['] before:mr-3 before:text-4xl before:text-primary-500 after:animate-pulse after:content-[']'] after:ml-3 after:text-4xl after:text-primary-500"
    >
        Projects
    </h2>

    <div class='flex flex-col gap-20'>
        <ProjectItem project={projects[0]} index={0}>
            A
            <mark>collaborative learning plattform</mark>
            . If you are a fan of a card-based learning system, Hondicard
            is perfectly made for you. You can also share your cards with your friends.<br /><br />The inspiration for
            this project emerged during a brainstorming session with <a href='https://github.com/zflxw'>a friend</a>, as
            we contemplated how we could enhance our learning experience through collaborative flashcards. We realized
            that
            <mark>sharing flashcards</mark>
            could not only reduce our workload, but also add an element of
            enjoyment, particularly with the aid of a high-quality app. Hence, we decided to bring this concept to life
            by developing our own application.
        </ProjectItem>
        <ProjectItem project={projects[1]} index={1}>
            A showcase project that
            <mark>lists all operators</mark>
            with further information from the
            <mark>Rainbow Six Siege</mark>
            video game.
            <br /><br />
            I saw other websites on the internet with the PokeAPI that lists every Pokemon, so I thought it would be
            <mark>fun to do</mark>
            something similar with Rainbow Six Siege operators, since I also played this game for a while. Sadly, there
            is not an API for Rainbow Six Siege or their operators. Maybe I will create one in the future. I also wanted
            to try out
            <mark>SvelteKit for the first time</mark>
            since I got hyped by friends.
        </ProjectItem>
    </div>
</section>
