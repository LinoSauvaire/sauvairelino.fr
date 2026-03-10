"use client";

import { useEffect, useState } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const username = "LinoSauvaire";

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        let allRepos: GitHubRepo[] = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=100&page=${page}`
          );
          const data = await response.json();
          
          if (data.length === 0) {
            hasMore = false;
          } else {
            allRepos = [...allRepos, ...data];
            page++;
            if (data.length < 100) {
              hasMore = false;
            }
          }
        }

        setRepos(allRepos);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des repos:", error);
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-[#8B5CF6] text-sm">Chargement des projets...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 md:gap-5 pt-6 md:pt-8 lg:pt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-white">Projets GitHub</h2>
        <a 
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] md:text-xs lg:text-sm text-[#8B5CF6] hover:text-[#A78BFA] transition-colors flex items-center gap-1"
        >
          Voir tout
          <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="space-y-2.5 md:space-y-3 lg:space-y-4 max-h-[280px] md:max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent">
        {repos.length === 0 ? (
          <p className="text-[#9CA3AF] text-xs md:text-sm text-center py-6 md:py-8">Aucun projet trouvé</p>
        ) : (
          repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <div className="relative p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group-hover:border-[#8B5CF6]/40 group-hover:translate-x-1">
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-3.5 md:w-4 lg:w-5 h-3.5 md:h-4 lg:h-5 text-[#8B5CF6] flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <h3 className="text-white font-semibold text-xs md:text-sm lg:text-base truncate group-hover:text-[#C4B5FD] transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <p className="text-[#9CA3AF] text-[10px] md:text-xs lg:text-sm leading-relaxed line-clamp-2 mb-1.5 md:mb-2">
                    {repo.description || "Aucune description disponible"}
                  </p>
                  <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5 px-1.5 md:px-2 lg:px-3 py-0.5 lg:py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[#C4B5FD] text-[9px] md:text-[10px] lg:text-xs font-medium">
                        <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#8B5CF6]"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="text-[#6B7280] text-[9px] md:text-[10px] lg:text-xs flex items-center gap-1">
                      <svg className="w-2.5 md:w-3 lg:w-4 h-2.5 md:h-3 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                    <span className="text-[#6B7280] text-[9px] md:text-[10px] lg:text-xs flex items-center gap-1">
                      <svg className="w-2.5 md:w-3 lg:w-4 h-2.5 md:h-3 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
                <svg className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-[#8B5CF6] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </a>
        ))
        )}
      </div>
      <p className="text-[#6B7280] text-[9px] md:text-[10px] lg:text-xs mt-1 text-center">
        {repos.length} projet{repos.length > 1 ? 's' : ''} · Connecté au compte GitHub: <span className="text-[#8B5CF6] font-medium">{username}</span>
      </p>
    </div>
  );
}
