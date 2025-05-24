import React from 'react';
import styles from './styles.module.scss';
import { useQuery } from '@tanstack/react-query';
import MainLayout from '../../layouts/MainLayout';
import { useMatch, Link } from '@tanstack/react-router';

interface Repository {
    id: string;
    name: string;
    url: string;
    description: string;
    language: string;
    stars: number;
    watchers: number;
    forks: number;
    open_issues: number;
}

const RepositoryDetail: React.FC = () => {
    // Get the repo ID from the URL
    const match = useMatch({ from: '/repository/$repoId' });
    const repoId = match?.params?.repoId as string;

    // Use type assertion for router state
    const routeState = (match as any)?.state;
    const stateRepository = routeState?.repository as Repository | undefined;

    // Fetch repository data if not available from route state
    const { data: fetchedRepo, isLoading } = useQuery({
        queryKey: ['repository', repoId],
        queryFn: async () => {
            // Mock data for the example
            return {
                id: "123",
                name: "git-repo-name",
                url: "https://github.com/user/git-repo-name",
                description: "My first repository on GitHub!",
                language: "JavaScript",
                stars: 123,
                watchers: 24,
                forks: 8,
                open_issues: 0
            } as Repository;
        },
        enabled: !stateRepository
    });

    // Use repository from state or from fetch
    const repository = stateRepository || fetchedRepo;

    // Loading state
    if (isLoading) {
        return React.createElement(MainLayout, null,
            React.createElement('div', { className: styles.loadingState }, 'Loading repository details...')
        );
    }

    // Error state
    if (!repository) {
        return React.createElement(MainLayout, null,
            React.createElement('div', { className: styles.errorContainer },
                React.createElement('h2', null, 'Repository not found'),
                React.createElement('p', null, 'The repository you\'re looking for doesn\'t exist or couldn\'t be loaded.'),
                React.createElement(Link, { to: '/', className: styles.backButton }, 'Return to search')
            )
        );
    }

    // Success state
    return React.createElement(MainLayout, null,
        React.createElement('div', { className: styles.container },
            // Back button
            React.createElement(Link, { to: '/', className: styles.backButton }, '← Back to repositories'),

            // Repository name
            React.createElement('h1', null, repository.name),

            // Description section
            React.createElement('div', { className: styles.description },
                React.createElement('h2', null, 'Description'),
                React.createElement('p', null, repository.description || 'No description provided')
            ),

            // Stats section
            React.createElement('div', { className: styles.stats },
                React.createElement('div', { className: styles.stat },
                    React.createElement('span', null, `⭐ ${repository.stars}`)
                ),
                React.createElement('div', { className: styles.stat },
                    React.createElement('span', null, `👁️ ${repository.watchers}`)
                ),
                React.createElement('div', { className: styles.stat },
                    React.createElement('span', null, `🍴 ${repository.forks}`)
                )
            ),

            // Branches section
            React.createElement('div', { className: styles.section },
                React.createElement('h2', null, 'Branches List'),
                React.createElement('div', {
                    style: {
                        backgroundColor: '#f6f8fa',
                        border: '1px solid #d0d7de',
                        borderRadius: '6px',
                        padding: '10px'
                    }
                },
                    React.createElement('div', null, 'branch-1'),
                    React.createElement('div', null, 'branch-2')
                )
            )
        )
    );
};

export default RepositoryDetail;